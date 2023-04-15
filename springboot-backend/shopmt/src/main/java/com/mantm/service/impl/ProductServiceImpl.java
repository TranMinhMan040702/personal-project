package com.mantm.service.impl;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.mantm.convert.ProductConvert;
import com.mantm.convert.ProductResponseConvert;
import com.mantm.dto.ProductDto;
import com.mantm.dto.response.ProductResponse;
import com.mantm.entity.Category;
import com.mantm.entity.Image_Product;
import com.mantm.entity.Product;
import com.mantm.exception.ResourceNotFoundException;
import com.mantm.repository.CategoryRepository;
import com.mantm.repository.ImageProductRepository;
import com.mantm.repository.ProductRepository;
import com.mantm.service.IProductService;
import com.mantm.service.IStorageService;
import com.mantm.service.specification.ProductSpecification;

@Component
@Transactional
public class ProductServiceImpl implements IProductService {

	@Autowired
	ModelMapper mapper;
	@Autowired
	IStorageService storageService;
	@Autowired
	ProductRepository productRepository;
	@Autowired
	CategoryRepository categoryRepository;
	@Autowired
	ImageProductRepository imageProductRepository;
	@Autowired
	Cloudinary cloudinary;
	@Autowired
	ProductConvert productConvert;
	@Autowired
	ProductResponseConvert productResponseConvert;

	@Override
	public ProductDto save(ProductDto productReq, MultipartFile[] files) throws Exception {
		Product entity = new Product();
		List<Image_Product> images = new ArrayList<>();
		if (productReq.getId() == null) {
			BeanUtils.copyProperties(productReq, entity);
			for (MultipartFile file : files) {
				images.add(saveCloudinary(file, entity));
			}
		} else {
			entity = productRepository.findById(productReq.getId())
					.orElseThrow(() -> new ResourceNotFoundException(
							"Product not exist with id: " + productReq.getId()));
			BeanUtils.copyProperties(productReq, entity, "createdAt", "createdBy");
			for (int i = 0; i < files.length; i++) {
				Image_Product imageOld = entity.getImages().get(i);
				MultipartFile imageNew = files[i];
				if (!imageOld.getPath().equals(imageNew.getOriginalFilename())) {
//					storageService.delete(imageOld.getPath());
					images.add(saveCloudinary(imageNew, entity));
				} else {
					images.add(imageOld);
				}
			}
			entity.getImages().clear();
			imageProductRepository.deleteByProductId(productReq.getId());
		}
		Category category = categoryRepository.findById(productReq.getCategory())
				.orElseThrow(() -> new ResourceNotFoundException(
						"Category not exist with id: " + productReq.getCategory()));
		entity.setCategory(category);
		entity.setImages(images);
		entity = productRepository.save(entity);
		return productConvert.converToDto(entity);
	}

	@Override
	public ProductResponse findAll(Long categoryId, Integer page, Integer limit, String sortBy,
			Double priceMin, Double priceMax, String search) {

		PageRequest pageRequest = PageRequest.of(page, limit, Sort.by(sortBy).descending());

		Specification<Product> specification = ProductSpecification.getSpecification(categoryId, search,
				priceMin, priceMax);

		Page<Product> products = productRepository.findAll(specification, pageRequest);

		return productResponseConvert.convertToDto(products);
	}

	@Override
	public ProductDto findProductById(long id) throws ResourceNotFoundException {
		ProductDto dto = new ProductDto();
		List<String> images = new ArrayList<>();
		Product entity = productRepository.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("Not found product with id: " + id));
		BeanUtils.copyProperties(entity, dto);
		for (Image_Product image : entity.getImages()) {
			images.add(image.getPath());
		}
		dto.setImages(images);
		dto.setCategory(entity.getCategory().getId());
		return dto;
	}

	@Override
	public List<ProductDto> findByCategory(Long categoryId, String search, Double priceMin,
			Double priceMax) {

		List<ProductDto> productDtos = new ArrayList<>();

		Specification<Product> specification = ProductSpecification.getSpecification(categoryId,
				search, priceMin, priceMax);

		List<Product> products = productRepository.findAll(specification);

		for (Product product : products) {
			productDtos.add(productConvert.converToDto(product));
		}
		return productDtos;
	}

	@Override
	public Map<String, String> deleteProduct(long id) throws Exception {
		Map<String, String> resp = new HashMap<>();
		Product entity = productRepository.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("Not found product with id: " + id));
		for (Image_Product image : entity.getImages()) {
			storageService.delete(image.getPath());
		}
		productRepository.deleteById(id);
		resp.put("deleted", "Success");
		return resp;
	}

	// WHEN SAVE IMAGE LOCAL
//	private Image_Product saveImage(MultipartFile file, Product product) {
//		Image_Product image_Product = new Image_Product();
//		UUID uuid = UUID.randomUUID();
//		String id = uuid.toString();
//		String path = storageService.getStorageFileName(file, id);
//		storageService.store(file, path);
//
//		image_Product.setProduct(product);
//		image_Product.setPath(path);
//		return image_Product;
//	}

	private Image_Product saveCloudinary(MultipartFile file, Product product) {
		Image_Product image_Product = new Image_Product();

		try {
			Map<?, ?> r = this.cloudinary.uploader().upload(file.getBytes(),
					ObjectUtils.asMap("resource_type", "auto"));
			String img = (String) r.get("secure_url");
			image_Product.setProduct(product);
			image_Product.setPath(img);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return image_Product;
	}

}
