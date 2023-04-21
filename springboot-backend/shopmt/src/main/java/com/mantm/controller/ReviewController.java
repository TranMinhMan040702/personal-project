package com.mantm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mantm.dto.ReviewDto;
import com.mantm.service.IReviewService;

@CrossOrigin("http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class ReviewController {

	@Autowired 
	IReviewService reviewService;
	
	@GetMapping("/review/product/{id}")
	public ResponseEntity<?> getAllReviewByProduct(@PathVariable long id) {
		return ResponseEntity.ok(reviewService.getAllReviewByProduct(id));
	}
	
	@GetMapping("/review/user/{id}")
	public ResponseEntity<?> getAllReviewByUser(@PathVariable long id) {
		return ResponseEntity.ok(reviewService.getAllReviewByUser(id));
	}
	
	@PostMapping("/review")
	public ResponseEntity<?> postReview(@RequestBody ReviewDto reviewDto) {
		return ResponseEntity.ok(reviewService.createReview(reviewDto));
	}
	
}
