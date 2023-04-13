package com.mantm.controller;

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

import com.mantm.dto.CartItemDto;
import com.mantm.exception.ResourceNotFoundException;
import com.mantm.service.ICartService;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class CartController {
	
	@Autowired ICartService cartService;
	
	@GetMapping("cart/user/{id}")
	public ResponseEntity<?> findCartUser(@PathVariable long id) {
		return ResponseEntity.ok(cartService.findCartUser(id));
	}

	@PostMapping("cart")
	public ResponseEntity<?> addToCart(@RequestBody CartItemDto cartItemDto) throws ResourceNotFoundException {
		return ResponseEntity.ok(cartService.addToCart(cartItemDto));
	}
	
	@PutMapping("cart/deleteOne")
	public ResponseEntity<?> deleteOneProductInCart(@RequestParam long cartItemId) {
		return ResponseEntity.ok(cartService.deleteOneProductInCart(cartItemId));
	}
	
	@DeleteMapping("cart/deleteAll")
	public ResponseEntity<?> deleteAllProductInCart(@RequestParam long cartItemId) {
		return ResponseEntity.ok(cartService.deleteAllProductInCart(cartItemId));
	}
	
//	@PutMapping("cart/{cartId}")
//	public ResponseEntity<?> clearedCart(@PathVariable long cartId) {
//		return ResponseEntity.ok(cartService.clearedCart(cartId));
//	}
}
