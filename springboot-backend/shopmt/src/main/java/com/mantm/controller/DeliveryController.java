package com.mantm.controller;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

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
import org.springframework.web.bind.annotation.RestController;

import com.mantm.dto.DeliveryDto;
import com.mantm.service.IDeliveryService;

@CrossOrigin({ "https://thunderous-basbousa-75b1ca.netlify.app/", "http://localhost:3000/" })
@RestController
@RequestMapping("/api/v1/")
public class DeliveryController {

	@Autowired
	private IDeliveryService deliveryService;

	@GetMapping("deliverise")
	public ResponseEntity<List<DeliveryDto>> findAllDelivery() {
		return ResponseEntity.ok(deliveryService.findAll());
	}

	@PostMapping("/admin/deliverise")
	public ResponseEntity<DeliveryDto> createDelivery(@RequestBody @Valid DeliveryDto deliveryDto)
			throws Exception {
		return ResponseEntity.ok(deliveryService.save(deliveryDto));
	}

	@PutMapping("/admin/deliverise/{id}")
	public ResponseEntity<DeliveryDto> updateDelivery(@RequestBody @Valid DeliveryDto deliveryDto,
			@PathVariable long id) throws Exception {
		deliveryDto.setId(id);
		return ResponseEntity.ok(deliveryService.save(deliveryDto));
	}

	@DeleteMapping("/admin/deliverise/{ids}")
	public ResponseEntity<Map<String, String>> deleteDelivery(@PathVariable List<String> ids) {
		return ResponseEntity.ok(deliveryService.deleteDelivery(ids));
	}

}
