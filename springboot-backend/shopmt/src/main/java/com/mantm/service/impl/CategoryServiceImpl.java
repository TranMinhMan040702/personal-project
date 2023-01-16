package com.mantm.service.impl;

import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.transaction.Transactional;

import org.apache.commons.beanutils.BeanUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.dto.CategoryDto;
import com.mantm.entity.Category;
import com.mantm.exception.IllegalAccessAndInvocationTargetException;
import com.mantm.exception.ResourceNotFoundException;
import com.mantm.repository.CategoryRepository;
import com.mantm.service.CategoryService;



@Component
public class CategoryServiceImpl implements CategoryService {

	@Autowired
	ModelMapper mapper;
	@Autowired
	CategoryRepository categoryRepository;

	@Override
	public List<CategoryDto> findAll() {
		List<CategoryDto> results = new ArrayList<>();
		List<Category> entity = categoryRepository.findAll();
		for (Category category : entity) {
			CategoryDto categoryDto = mapper.map(category, CategoryDto.class);
			results.add(categoryDto);
		}
		return results;
	}

	@Override
	public CategoryDto findCategoryById(long id) {
		Optional<Category> entity = categoryRepository.findById(id);
		CategoryDto result = mapper.map(entity, CategoryDto.class);
		return result;
	}

	@Override
	public CategoryDto save(CategoryDto categoryDto) throws IllegalAccessAndInvocationTargetException{
		Category entity = new Category();
		try {
			if (categoryDto.getId() != null) {
				Optional<Category> oldEntity = categoryRepository.findById(categoryDto.getId());
				BeanUtils.copyProperties(entity, oldEntity);
				entity.setName(categoryDto.getName());
			} else {
				BeanUtils.copyProperties(entity, categoryDto);
			}
			entity = categoryRepository.save(entity);
			return mapper.map(entity, CategoryDto.class);
		} catch (IllegalAccessException | InvocationTargetException e) {
			throw new IllegalAccessAndInvocationTargetException("Access Illegal");
		}
	}

	@Override
	public Map<String, String> deleteCategory(List<String>  ids) {
		Map<String, String> resp = new HashMap<>();
		for (String item : ids) {
			categoryRepository.deleteById(Long.parseLong(item));
		}
		resp.put("delete", "Success");
		return resp;
	}
	
	@Override
	@Transactional(rollbackOn = ResourceNotFoundException.class)
	public Map<String, String> deleteSoftCategory(long[] ids) throws ResourceNotFoundException {
		Map<String, String> resp = new HashMap<>();
		for (long item : ids) {
			Category entity = categoryRepository.findById(item)
					.orElseThrow(()-> new ResourceNotFoundException("Category not exist with id:" + item));
			entity.setDeleted(true);
			categoryRepository.save(entity);
		}
		resp.put("delete-soft", "Success");
		return resp;
	}

}
