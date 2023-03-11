package com.mantm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mantm.dto.CartItemDto;
import com.mantm.exception.ResourceNotFoundException;
import com.mantm.service.ICartService;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class CartController {
	
	@Autowired ICartService cartServiceImpl;

	@PostMapping("cart")
	public ResponseEntity<?> addToCart(@RequestBody CartItemDto cartItemDto) throws ResourceNotFoundException {
		return ResponseEntity.ok(cartServiceImpl.addToCart(cartItemDto));
	}
	
	@PutMapping("cart/deleteOne")
	public ResponseEntity<?> deleteOneProductInCart(@RequestParam long cartItemId) {
		return ResponseEntity.ok(cartServiceImpl.deleteOneProductInCart(cartItemId));
	}
	
	@DeleteMapping("cart/deleteAll")
	public ResponseEntity<?> deleteAllProductInCart(@RequestParam long cartItemId) {
		return ResponseEntity.ok(cartServiceImpl.deleteAllProductInCart(cartItemId));
	}
}
