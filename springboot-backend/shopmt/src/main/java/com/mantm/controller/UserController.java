package com.mantm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
import com.mantm.dto.AddressDto;
import com.mantm.dto.UserDto;
import com.mantm.service.IAddressService;
import com.mantm.service.ILikeProductService;
import com.mantm.service.IUserService;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserController {

	@Autowired IUserService userService;
	@Autowired IAddressService addressService;
	@Autowired ILikeProductService likeProductService;
	@Autowired ObjectMapper objectMapper;

	@GetMapping("users")
	public ResponseEntity<?> findAllUser() {
		return ResponseEntity.ok(userService.findAll());
	}

	@GetMapping("users/{id}")
	public ResponseEntity<?> findOneByUserId(@PathVariable long id) {
		return ResponseEntity.ok(userService.findOneByUserId(id));
	}

	@PostMapping("/users")
	public ResponseEntity<?> updateUser(@RequestParam("model") String JsonObject,
			@RequestParam(name = "file", required = false) MultipartFile file) throws Exception {

		UserDto user = new UserDto();
		user = objectMapper.readValue(JsonObject, UserDto.class);
		return ResponseEntity.ok(userService.updateUser(user, file));
	}

	@GetMapping("users/addresses/{id}")
	public ResponseEntity<?> findAddresses(@PathVariable long id) {
		return ResponseEntity.ok(addressService.findAddressByUserId(id));
	}

	@PostMapping("users/addresses")
	public ResponseEntity<?> uploadAddresses(@RequestBody AddressDto addressDto) {
		return ResponseEntity.ok(addressService.saveAddressByUserId(addressDto));
	}

	@PutMapping("users/addresses/{id}")
	public ResponseEntity<?> deleteAddress(@PathVariable long id) {
		return ResponseEntity.ok(addressService.deleteAddressById(id));
	}
	
	@GetMapping("users/admin/follow-product")
	public ResponseEntity<?> getAllLikeProduct() {
		return ResponseEntity.ok(likeProductService.findAllLikeProduct());
	}
	
	@GetMapping("users/follow-product") 
	public ResponseEntity<?> getLikeProductByUser(@RequestParam long userId) {
		return ResponseEntity.ok(likeProductService.findLikeProductByUser(userId));
	}
	
	@PostMapping("users/follow-product")
	public ResponseEntity<?> likeProduct(@RequestParam long userId, @RequestParam long productId) {
		return ResponseEntity.ok(likeProductService.likeProduct(userId, productId));
	}
	
	@PutMapping("users/follow-product")
	public ResponseEntity<?> unLikeProduct(@RequestParam long userId, @RequestParam long productId) {
		return ResponseEntity.ok(likeProductService.unLikeProduct(userId, productId));
	}

}
