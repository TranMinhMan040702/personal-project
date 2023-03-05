package com.mantm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mantm.dto.CartDto;
import com.mantm.service.ICartService;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class CartController {
	
	@Autowired ICartService cartServiceImpl;

	@PostMapping("cart")
	public void save(@RequestBody CartDto cartDto, @RequestParam long userId) {
		cartServiceImpl.save(cartDto, userId);
	}
}
