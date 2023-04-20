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

import com.mantm.contains.Containt;
import com.mantm.dto.OrderDto;
import com.mantm.exception.ResourceNotFoundException;
import com.mantm.service.IOrderService;

@CrossOrigin("http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class OrderController {

	@Autowired
	IOrderService orderService;

	@PostMapping("/order")
	public ResponseEntity<?> createOrder(@RequestBody OrderDto dto)
			throws ResourceNotFoundException {
		return ResponseEntity.ok(orderService.createOrder(dto));
	}

	@GetMapping("admin/order")
	public ResponseEntity<?> getAllOrderByStatus(@RequestParam(required = false) String status,
			@RequestParam(defaultValue = "0", required = false) Integer page,
			@RequestParam(defaultValue = Containt.DEFAULT_LIMIT_SIZE_PAGE, required = false) Integer limit,
			@RequestParam(defaultValue = Containt.DEFAULT_LIMIT_SORT_BY, required = false) String sortBy,
			@RequestParam(required = false) String search) {
		return ResponseEntity.ok(orderService.findAllOrdersByStatusWithPaginationAndSort(status,
				page, limit, sortBy, search));
	}

	@GetMapping("admin/order/top-5-latest")
	public ResponseEntity<?> getTop5OrderLatest(
			@RequestParam(defaultValue = "0", required = false) Integer page,
			@RequestParam(defaultValue = Containt.DEFAULT_LIMIT_SIZE_PAGE, required = false) Integer limit,
			@RequestParam(defaultValue = Containt.DEFAULT_LIMIT_SORT_BY, required = false) String sortBy) {
		return ResponseEntity.ok(orderService.findAllOrdersByStatusWithPaginationAndSort(null,
				page, limit = 5, sortBy, null));

	}

	@GetMapping("/order/{id}")
	public ResponseEntity<?> getOrderById(@PathVariable long id) {
		return ResponseEntity.ok(orderService.findOrderById(id));
	}

	@GetMapping("/order/user")
	public ResponseEntity<?> getOrderByStatus(@RequestParam long userId,
			@RequestParam String status) {
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
