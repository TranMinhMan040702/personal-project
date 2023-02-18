package com.mantm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mantm.dto.RoleDto;
import com.mantm.exception.ResourceNotFoundException;
import com.mantm.service.IRoleService;

@RestController
@RequestMapping("/api/v1/admin")
public class RoleController {

	@Autowired
	private IRoleService roleService;
	
	@GetMapping("/roles")
	public ResponseEntity<?> findAllRoles() {
		return ResponseEntity.ok(roleService.findAllRole());
	}
	
	@PostMapping("/roles")
	public ResponseEntity<?> createRole(@RequestBody RoleDto roleDto) {
		return ResponseEntity.ok(roleService.save(roleDto));
	}
	
	@DeleteMapping("/roles/{ids}")
	public ResponseEntity<?> deleteRole(@PathVariable List<String> ids) throws ResourceNotFoundException {
		return ResponseEntity.ok(roleService.deleteRole(ids));
	}
	
}
