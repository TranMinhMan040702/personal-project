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

import com.mantm.dto.OrderDto;
import com.mantm.exception.ResourceNotFoundException;
import com.mantm.service.IOrderService;

@CrossOrigin("http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class OrderController {
	
	@Autowired IOrderService orderService;
	
	@PostMapping("/order")
	public ResponseEntity<?> createOrder(@RequestBody OrderDto dto) throws ResourceNotFoundException {
		return ResponseEntity.ok(orderService.createOrder(dto));
	}
	
	@GetMapping("/order")
	public ResponseEntity<?> getOrder() {
		return ResponseEntity.ok(orderService.findAllOrders());
	}
	
	@GetMapping("/order/{id}")
	public ResponseEntity<?> getOrderById(@PathVariable long id) {
		return ResponseEntity.ok(orderService.findOrderById(id));
	}
	
	@GetMapping("/order/user")
	public ResponseEntity<?> getOrderByStatus(@RequestParam long userId, @RequestParam String status) {
		return ResponseEntity.ok(orderService.findOrderByStatus(userId, status));
	}
	
	@GetMapping("/order/user/{userId}")
	public ResponseEntity<?> getOrderByUser(@PathVariable long userId) {
		return ResponseEntity.ok(orderService.findAllOrdersByUser(userId));
	}
	
	@PutMapping("/order") 
	public ResponseEntity<?> updateStatus(@RequestParam long orderId, @RequestParam String status) {
		return ResponseEntity.ok(orderService.updateStatus(orderId, status));
	}
	@DeleteMapping("/order/{id}")
	public ResponseEntity<?> deleteOrder(@PathVariable long id) {
		return ResponseEntity.ok(orderService.deleteOrder(id));
	}
}
