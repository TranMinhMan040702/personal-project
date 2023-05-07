package com.mantm.service.impl;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.mantm.convert.CategoryConvert;
import com.mantm.dto.CategoryDto;
import com.mantm.entity.Category;
import com.mantm.exception.ResourceNotFoundException;
import com.mantm.repository.CategoryRepository;
import com.mantm.service.ICategoryService;

@Component
@Transactional
public class CategoryServiceImpl implements ICategoryService {

	@Autowired
	private ModelMapper mapper;
	@Autowired
	private CategoryRepository categoryRepository;
	@Autowired
	private CategoryConvert categoryConvert;
	@Autowired
	private Cloudinary cloudinary;

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
		Category entity = categoryRepository.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("Category not exist with id: " + id));
		CategoryDto result = mapper.map(entity, CategoryDto.class);
		return result;
	}

	@Override
	public CategoryDto save(CategoryDto categoryDto, MultipartFile file) throws Exception {

		Category category = categoryConvert.convertToEntity(categoryDto);

		if (categoryDto.getId() != null) {
			String imageOld = category.getImage();
			if ((imageOld == null
					|| file != null && !imageOld.equals(file.getOriginalFilename()))) {
				category.setImage(saveImageCloudinary(file));
			}
		} else {
			category.setImage(saveImageCloudinary(file));
		}
		category = categoryRepository.save(category);
		return categoryConvert.convertToDto(category);
	}

	private String saveImageCloudinary(MultipartFile file) {
		Map<?, ?> r;
		try {
			r = this.cloudinary.uploader().upload(file.getBytes(),
					ObjectUtils.asMap("resource_type", "auto"));
			return (String) r.get("secure_url");
		} catch (IOException e) {
			e.printStackTrace();
		}
		return "";
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
	@Transactional(rollbackFor = ResourceNotFoundException.class)
	public Map<String, String> deleteSoftCategory(long[] ids) throws ResourceNotFoundException {
		Map<String, String> resp = new HashMap<>();
		for (long item : ids) {
			Category entity = categoryRepository.findById(item).orElseThrow(
					() -> new ResourceNotFoundException("Category not exist with id: " + item));
			entity.setDeleted(true);
			categoryRepository.save(entity);
		}
		resp.put("delete-soft", "Success");
		return resp;
	}

}
