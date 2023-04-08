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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mantm.dto.ProductDto;
import com.mantm.exception.ResourceNotFoundException;
import com.mantm.repository.ImageProductRepository;
import com.mantm.service.IProductService;
import com.mantm.service.IStorageService;

@CrossOrigin("http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class ProductController {

	@Autowired ObjectMapper objectMapper;
	@Autowired IProductService productService;
	@Autowired IStorageService storageService;
	@Autowired ImageProductRepository imageProductRepository;

	@GetMapping("products")
	public ResponseEntity<List<ProductDto>> getProduct() {
		return ResponseEntity.ok(productService.findAll());
	}
	
	@GetMapping("product")
	public ResponseEntity<?> getProductById(@RequestParam long id) throws ResourceNotFoundException {
		return ResponseEntity.ok(productService.findProductById(id));
	}
	
	@GetMapping("products/category/{id}") 
	public ResponseEntity<?> getProductByCategory(@PathVariable long id) {
		return ResponseEntity.ok(productService.findByCategory(id));
	}

	@PostMapping("/admin/products")
	public ResponseEntity<?> createProduct(@RequestParam("model") String JsonObject,
			@RequestParam("files") MultipartFile[] files)
			throws Exception {

		ProductDto product = new ProductDto();
		product = objectMapper.readValue(JsonObject, ProductDto.class);

		return ResponseEntity.ok(productService.save(product, files));
	}
	
	@PostMapping("/admin/products/{id}") 
	public ResponseEntity<?> updateProduct(@PathVariable long id, 
			@RequestParam("model") String JsonObject,
			@RequestParam("files") MultipartFile[] files) throws Exception {
		
		ProductDto product = new ProductDto();
		product = objectMapper.readValue(JsonObject, ProductDto.class);
		return ResponseEntity.ok(productService.save(product, files));
	}

	@DeleteMapping("/admin/products/{id}")
	public ResponseEntity<Map<String, String>> deleteProduct(@PathVariable long id) throws Exception {
		return ResponseEntity.ok(productService.deleteProduct(id));
	}

	
}
