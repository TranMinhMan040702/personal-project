package com.mantm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mantm.dto.input.UserRegister;
import com.mantm.dto.output.UserResponse;
import com.mantm.service.IUserService;

@CrossOrigin("http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class UserController {
	
	@Autowired
	IUserService userService;

	@GetMapping("users")
	public ResponseEntity<List<UserResponse>> findAllUser() {
		return ResponseEntity.ok(userService.findAll());
	}
	
	@PostMapping("users")
	public ResponseEntity<UserResponse> createUser(@RequestBody UserRegister userRegister) {
		return new ResponseEntity<UserResponse>(userService.save(userRegister), HttpStatus.OK);
	}
}