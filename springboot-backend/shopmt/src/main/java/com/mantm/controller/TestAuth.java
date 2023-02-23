package com.mantm.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.ExpiredJwtException;

@RestController
@RequestMapping("/api/v1")
public class TestAuth {

	@GetMapping("/admin")
	public ResponseEntity<?> sayHelloAdmin() throws ExpiredJwtException{
		return ResponseEntity.ok("Hello Admin");
	}
	
	@GetMapping("/user")
	public ResponseEntity<?> sayHelloUser() {
		return ResponseEntity.ok("Hello User");
	}
	
}
