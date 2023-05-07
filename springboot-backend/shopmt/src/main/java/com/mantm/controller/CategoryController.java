package com.mantm.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mantm.dto.CategoryDto;
import com.mantm.exception.ResourceNotFoundException;
import com.mantm.service.ICategoryService;

@CrossOrigin({ "https://thunderous-basbousa-75b1ca.netlify.app/", "http://localhost:3000/" })
@RestController
@RequestMapping("/api/v1/")
public class CategoryController {

	@Autowired
	private ICategoryService categoryService;
	@Autowired
	private ObjectMapper objectMapper;

	@GetMapping("/categorise")
	public ResponseEntity<List<CategoryDto>> findAllCategory() {
		return ResponseEntity.ok(categoryService.findAll());
	}

	@GetMapping("/categorise/{id}")
	public ResponseEntity<?> findCategoryById(@PathVariable long id)
			throws ResourceNotFoundException {
		return ResponseEntity.ok(categoryService.findCategoryById(id));
	}

	@PostMapping("/admin/categorise")
	public ResponseEntity<?> saveCategory(@RequestParam("model") String JsonObject,
			@RequestParam(name = "file", required = false) MultipartFile file) throws Exception {

		CategoryDto categoryDto = new CategoryDto();
		categoryDto = objectMapper.readValue(JsonObject, CategoryDto.class);
		return ResponseEntity.ok(categoryService.save(categoryDto, file));
	}

	@DeleteMapping("/admin/categorise/{ids}")
	public ResponseEntity<Map<String, String>> deleteCategory(@PathVariable List<String> ids) {
		return ResponseEntity.ok(categoryService.deleteCategory(ids));
	}

	@PutMapping("/admin/categorise")
	ResponseEntity<Map<String, String>> deleteSoftCategory(@RequestBody long[] ids)
			throws ResourceNotFoundException {
		return ResponseEntity.ok(categoryService.deleteSoftCategory(ids));
	}
}
