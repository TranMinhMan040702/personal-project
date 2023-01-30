package com.mantm.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.mantm.dto.CategoryDto;
import com.mantm.exception.ResourceNotFoundException;



@Service
public interface ICategoryService {

	CategoryDto save(CategoryDto categoryDto) throws Exception;

	CategoryDto findCategoryById(long id) throws ResourceNotFoundException;

	List<CategoryDto> findAll();

	Map<String, String> deleteCategory(List<String>  ids);

	Map<String, String> deleteSoftCategory(long[] ids) throws ResourceNotFoundException;

}
