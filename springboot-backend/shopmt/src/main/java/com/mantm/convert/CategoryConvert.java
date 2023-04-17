package com.mantm.convert;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import com.mantm.dto.CategoryDto;
import com.mantm.entity.Category;

@Component
public class CategoryConvert {
	
	public CategoryDto convertToDto (Category category) {
		CategoryDto dto = new CategoryDto();
		BeanUtils.copyProperties(category, dto);
		return dto;
	}
	
	public Category convertToEntity (CategoryDto categoryDto) {
		Category entity = new Category();
		BeanUtils.copyProperties(categoryDto, entity);
		return entity;
	}

}
