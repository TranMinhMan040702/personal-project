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
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

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
	public ProductDto save(ProductDto productReq, MultipartFile[] files) throws ResourceNotFoundException {
		Product entity = new Product();
		List<Image_Product> images = new ArrayList<>();
		for (MultipartFile file : files) {
			UUID uuid = UUID.randomUUID();
			String id = uuid.toString();
			String path = storageService.getStorageFileName(file, id);
			storageService.store(file, path);
			
			Image_Product image_Product = new Image_Product();
			image_Product.setProduct(entity);
			image_Product.setPath(ServletUriComponentsBuilder.fromCurrentContextPath()
					.path("/api/v1/products/")
					.path(path)
					.toUriString());
			images.add(image_Product);
		}
		BeanUtils.copyProperties(productReq, entity);
		Category category = categoryRepository.findById(productReq.getCategory())
				.orElseThrow(()-> new ResourceNotFoundException("Category not exist with id: " 
						+ productReq.getCategory()));
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
	public Map<String, String> deleteProduct(long id) {
		Map<String, String> resp = new HashMap<>();
		productRepository.deleteById(id);
		resp.put("deleted", "Success");
		return resp;
	}

}
