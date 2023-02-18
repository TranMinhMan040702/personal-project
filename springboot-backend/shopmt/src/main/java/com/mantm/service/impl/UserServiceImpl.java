package com.mantm.service.impl;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.dto.request.RegisterRequest;
import com.mantm.dto.response.UserResponse;
import com.mantm.entity.Role;
import com.mantm.entity.User;
import com.mantm.exception.ResourceNotFoundException;
import com.mantm.repository.RoleRepository;
import com.mantm.repository.UserRepository;
import com.mantm.service.IUserService;

@Component
public class UserServiceImpl implements IUserService{
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	RoleRepository roleRepository;
	
	@Override
	public List<UserResponse> findAll() {
		List<User> entitise = userRepository.findAll();
		List<UserResponse> users = new ArrayList<>();
		
		for (User user : entitise) {
			
			UserResponse userResp = new UserResponse();
			Set<String> roles = new HashSet<>();
			
			for (Role role : user.getRoles()) {
				roles.add(role.getName());
			}
			
			BeanUtils.copyProperties(user, userResp);
			userResp.setRoles(roles);
			users.add(userResp);
		}
		return users;
	}
	
	@Override
	public UserResponse save(RegisterRequest userRegister) throws ResourceNotFoundException {
		User entity = new User();
		UserResponse userResp = new UserResponse();
		List<Role> roles = new ArrayList<>();
		// convert from user request to entity
		for (String role : userRegister.getRoles()) {
			Role r = roleRepository.findByName(role);
			if (r != null) {
				roles.add(r);
			} else {
				throw new ResourceNotFoundException("Not found Role with name: " + role);
			}
		}
		
		BeanUtils.copyProperties(userRegister, entity);
		entity.setRoles(roles);
		entity = userRepository.save(entity);
		
		// convert from entity to user response
		BeanUtils.copyProperties(entity, userResp);
		userResp.setRoles(userRegister.getRoles());
		return userResp;
	}
}
