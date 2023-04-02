
package com.mantm.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.mantm.dto.RoleDto;
import com.mantm.entity.Role;
import com.mantm.exception.ResourceNotFoundException;
import com.mantm.repository.RoleRepository;
import com.mantm.service.IRoleService;

@Component
@Transactional
public class RoleServiceImpl implements IRoleService{

	@Autowired
	RoleRepository roleRepository;
	
	@Override
	public List<RoleDto> findAllRole() {
		List<Role> roles = roleRepository.findAll();
		List<RoleDto> roleResp = new ArrayList<>();
		
		for (Role role : roles) {
			RoleDto dto = new RoleDto();
			BeanUtils.copyProperties(role, dto);
			roleResp.add(dto);
		}
		
		return roleResp;
	}
	
	@Override
	public RoleDto save(RoleDto dto) {
		
		Role entity =  new Role();
		RoleDto roleResp = new RoleDto();
		
		if (dto.getId() != null) {
			BeanUtils.copyProperties(dto, entity, "createdAt", "createdBy");
		} else {
			BeanUtils.copyProperties(dto, entity);
		}
		
		BeanUtils.copyProperties(roleRepository.save(entity), roleResp);
		
		return roleResp;
		
	}
	
	@Override
	public Map<String, String> deleteRole(List<String> ids) throws ResourceNotFoundException {
		
		Map<String, String> resp = new HashMap<>();
		
		for (String id : ids) {
			Role role = roleRepository.findById(Long.parseLong(id)).orElseThrow(
					() -> new ResourceNotFoundException("Not found Role with id: " + id));
			roleRepository.delete(role);
		}
		
		resp.put("Delete", "Successfully");
		return resp;
	}
}
