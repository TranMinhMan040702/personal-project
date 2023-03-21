package com.mantm.convert;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.dto.ProductDto;
import com.mantm.entity.Category;
import com.mantm.entity.Image_Product;
import com.mantm.entity.Product;
import com.mantm.exception.ResourceNotFoundException;
import com.mantm.repository.CategoryRepository;

@Component
public class ProductConvert {
	
	@Autowired CategoryRepository categoryRepository;
	
	public Product convertToEntity(ProductDto dto) throws ResourceNotFoundException {
		Product entity = new Product();
		List<Image_Product> images = new ArrayList<>();
		BeanUtils.copyProperties(dto, entity);
		for (String image : dto.getImages()) {
			Image_Product image_Product = new Image_Product();
			image_Product.setPath(image);
			image_Product.setProduct(entity);
			images.add(image_Product);	
		}
		entity.setImages(images);
		Category category = categoryRepository.findById(dto.getCategory()).orElseThrow(
				() -> new ResourceNotFoundException("Category not exist with id: " + dto.getCategory()));
		entity.setCategory(category);
		return entity;
	}
	
	public ProductDto converToDto(Product product) {
		ProductDto dto = new ProductDto();
		List<String> images = new ArrayList<>();
		BeanUtils.copyProperties(product, dto);
		for (Image_Product image : product.getImages()) {
			images.add(image.getPath());	
		}
		dto.setImages(images);
		dto.setCategory(product.getCategory().getId());
		return dto;
	}
}
