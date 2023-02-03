package com.mantm.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.dto.input.UserRegister;
import com.mantm.dto.output.UserResponse;
import com.mantm.entity.User;
import com.mantm.repository.UserRepository;
import com.mantm.service.IUserService;

@Component
public class UserServiceImpl implements IUserService{
	
	@Autowired
	UserRepository userRepository;
	
	@Override
	public List<UserResponse> findAll() {
		List<User> entitise = userRepository.findAll();
		List<UserResponse> users = new ArrayList<>();
		
		for (User user : entitise) {
			UserResponse UserResp = new UserResponse();
			BeanUtils.copyProperties(user, UserResp);
			users.add(UserResp);
		}
		return users;
	}
	
	@Override
	public UserResponse save(UserRegister userRegister) {
		User entity = new User();
		UserResponse userResp = new UserResponse();
		BeanUtils.copyProperties(userRegister, entity);
		entity = userRepository.save(entity);
		BeanUtils.copyProperties(entity, userResp);
		return userResp;
	}
}
