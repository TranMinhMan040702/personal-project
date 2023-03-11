package com.mantm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mantm.dto.UserDto;
import com.mantm.service.IUserService;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserController {
	
	@Autowired
	IUserService userService;

	@GetMapping("users")
	public ResponseEntity<List<UserDto>> findAllUser() {
		return ResponseEntity.ok(userService.findAll());
	}
	
	@GetMapping("users/{id}")
	public ResponseEntity<?> findOneByUserId(@PathVariable long id) {
		return ResponseEntity.ok(userService.findOneByUserId(id));
	}
	
	@GetMapping("users/cart")
	public ResponseEntity<?> findCartUser(@RequestParam long userId) {
		return ResponseEntity.ok(userService.findCartUser(userId));
	}
}
