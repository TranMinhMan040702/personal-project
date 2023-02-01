package com.mantm.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.mantm.dto.ProductDto;
import com.mantm.entity.Category;
import com.mantm.entity.Image_Product;
import com.mantm.entity.Product;
import com.mantm.exception.ResourceNotFoundException;
import com.mantm.repository.CategoryRepository;
import com.mantm.repository.ProductRepository;
import com.mantm.service.IProductService;
import com.mantm.service.IStorageService;

@Component
public class ProductServiceImpl implements IProductService {

	@Autowired
	ModelMapper mapper;
	@Autowired
	ProductRepository productRepository;
	@Autowired
	CategoryRepository categoryRepository;
	@Autowired
	IStorageService storageService;

	@Override
	public ProductDto save(ProductDto productReq, MultipartFile[] files) throws Exception {
		Product entity = new Product();
		List<Image_Product> images = new ArrayList<>();
		if (productReq.getId() == null) {
			BeanUtils.copyProperties(productReq, entity);
			// xử lý ảnh
			for (MultipartFile file : files) {
				UUID uuid = UUID.randomUUID();
				String id = uuid.toString();
				String path = storageService.getStorageFileName(file, id);
				storageService.store(file, path);

				Image_Product image_Product = new Image_Product();
				image_Product.setProduct(entity);
				image_Product.setPath(path);
				images.add(image_Product);
			}
			
		} else {
			entity = productRepository.findById(productReq.getId()).orElseThrow(
					() -> new ResourceNotFoundException("Product not exist with id: " + productReq.getId()));
			BeanUtils.copyProperties(productReq, entity, "createdAt", "createdBy");

			// kiểm tra xóa ảnh cũ khỏi dir
			for (int i = 0; i < files.length; i++) {
				Image_Product imageOld = entity.getImages().get(i);
				MultipartFile imageNew = files[i];
				if (imageOld.getPath() != imageNew.getOriginalFilename()) {
					storageService.delete(imageOld.getPath());

					// lưu ảnh mới
					UUID uuid = UUID.randomUUID();
					String id = uuid.toString();
					String path = storageService.getStorageFileName(imageNew, id);
					storageService.store(imageNew, path);

					Image_Product image_Product = new Image_Product();
					image_Product.setProduct(entity);
					image_Product.setPath(path);
					images.add(image_Product);
				} else {
					images.add(imageOld);
				}
			}
		}
		
		Category category = categoryRepository.findById(productReq.getCategory()).orElseThrow(
				() -> new ResourceNotFoundException("Category not exist with id: " + productReq.getCategory()));
		entity.setCategory(category);
		entity.setImages(images);
		entity = productRepository.save(entity);

		// Response Product
		ProductDto productResp = new ProductDto();
		BeanUtils.copyProperties(entity, productResp);

		List<String> listImage = new ArrayList<>();
		for (Image_Product image : entity.getImages()) {
			listImage.add(image.getPath());
		}
		productResp.setCategory(entity.getCategory().getId());
		productResp.setImages(listImage);
		return productResp;
	}

	@Override
	public List<ProductDto> findAll() {
		List<ProductDto> results = new ArrayList<>();
		List<Product> entitise = productRepository.findAll();
		for (Product product : entitise) {
			ProductDto dto = new ProductDto();
			List<String> images = new ArrayList<>();
			BeanUtils.copyProperties(product, dto);
			for (Image_Product image : product.getImages()) {
				images.add(image.getPath());
			}
			dto.setCategory(product.getCategory().getId());
			dto.setImages(images);
			results.add(dto);
		}
		return results;
	}

	@Override
	public ProductDto findProductById(long id) throws ResourceNotFoundException {
		ProductDto dto = new ProductDto();
		List<String> images = new ArrayList<>();
		Product entity = productRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Not found product with id: " + id));
		BeanUtils.copyProperties(entity, dto);
		for (Image_Product image : entity.getImages()) {
			images.add(image.getPath());
		}
		dto.setImages(images);
		dto.setCategory(entity.getCategory().getId());
		return dto;
	}

	@Override
	public Map<String, String> deleteProduct(long id) throws Exception {
		Map<String, String> resp = new HashMap<>();
		Product entity = productRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Not found product with id: " + id));
		for (Image_Product image : entity.getImages()) {
			storageService.delete(image.getPath());
		}
		productRepository.deleteById(id);
		resp.put("deleted", "Success");
		return resp;
	}

}
