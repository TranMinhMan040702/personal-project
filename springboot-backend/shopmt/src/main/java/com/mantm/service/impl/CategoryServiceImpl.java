package com.mantm.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.dto.CategoryDto;
import com.mantm.entity.Category;
import com.mantm.exception.ResourceNotFoundException;
import com.mantm.repository.CategoryRepository;
import com.mantm.service.ICategoryService;



@Component
public class CategoryServiceImpl implements ICategoryService {

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
	public CategoryDto findCategoryById(long id) throws ResourceNotFoundException {
		Category entity = categoryRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Category not exist with id: " + id));
		CategoryDto result = mapper.map(entity, CategoryDto.class);
		return result;
	}

	@Override
	public CategoryDto save(CategoryDto categoryDto) {
		Category entity = new Category();
		if (categoryDto.getId() != null) {
			Optional<Category> oldEntity = categoryRepository.findById(categoryDto.getId());
			BeanUtils.copyProperties(oldEntity, entity);
			BeanUtils.copyProperties(categoryDto, entity);
		} else {
			BeanUtils.copyProperties(categoryDto, entity);
		}
		entity = categoryRepository.save(entity);
		return mapper.map(entity, CategoryDto.class);
	}

	@Override
	public Map<String, String> deleteCategory(List<String> ids) {
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
					.orElseThrow(()-> new ResourceNotFoundException("Category not exist with id: " + item));
			entity.setDeleted(true);
			categoryRepository.save(entity);
		}
		resp.put("delete-soft", "Success");
		return resp;
	}

}
