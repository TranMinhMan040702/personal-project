package com.mantm.convert;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.entity.Role;
import com.mantm.repository.RoleRepository;

@Component
public class RoleConvert {
	
	@Autowired RoleRepository roleRepository;
	
	public List<Role> convertToEntity(Set<String> roleDtos) {
		List<Role> roles = new ArrayList<>();
		for (String role : roleDtos) {
			roles.add(roleRepository.findByName(role));
		}
		return roles;
	}
	
	public Set<String> convertToDto(List<Role> roleEntities) {
		Set<String> roles = new HashSet<>();
		for (Role role : roleEntities) {
			roles.add(role.getName());
		}
		return roles;
	}
}
