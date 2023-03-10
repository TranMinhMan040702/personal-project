package com.mantm.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.convert.UserConvert;
import com.mantm.dto.UserDto;
import com.mantm.entity.User;
import com.mantm.repository.RoleRepository;
import com.mantm.repository.UserRepository;
import com.mantm.service.IUserService;

@Component
public class UserServiceImpl implements IUserService{
	
	@Autowired UserRepository userRepository;
	@Autowired RoleRepository roleRepository;
	@Autowired UserConvert convert;
	
	@Override
	public List<UserDto> findAll() {
		List<User> entitise = userRepository.findAll();
		List<UserDto> users = new ArrayList<>();
		for (User user : entitise) {
			UserDto userResp = convert.convertToDto(user);
			users.add(userResp);
		}
		return users;
	}
	
	@Override
	public UserDto findOneByUserId(long userId) {
		Optional<User> user = userRepository.findById(userId);
		return convert.convertToDto(user.get());
	}

}
