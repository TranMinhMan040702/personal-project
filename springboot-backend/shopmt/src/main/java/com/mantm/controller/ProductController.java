package com.mantm.controller;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
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

	@Autowired
	ObjectMapper objectMapper;
	@Autowired
	IProductService productService;
	@Autowired
	IStorageService storageService;
	@Autowired
	ImageProductRepository imageProductRepository;

	// Get Image
	@GetMapping("images/products/{filename:.+}")
	@ResponseBody
	public ResponseEntity<Resource> serverFiles(@PathVariable String filename, HttpServletRequest request) {
		Resource file = storageService.loadAsResource(filename);
		String contentType = null;
		try {
			contentType = request.getServletContext().getMimeType(file.getFile().getAbsolutePath());
		} catch (IOException ex) {
			System.out.println("Could not determine fileType");
		}
		if (contentType == null) {
			contentType = "application/octet-stream";
		}
		return ResponseEntity.ok().contentType(MediaType.parseMediaType(contentType)).body(file);
	}

	@GetMapping("products")
	public ResponseEntity<List<ProductDto>> getProduct() {
		return ResponseEntity.ok(productService.findAll());
	}
	
	@GetMapping("product")
	public ResponseEntity<?> getProductById(@RequestParam long id) throws ResourceNotFoundException {
		return ResponseEntity.ok(productService.findProductById(id));
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
