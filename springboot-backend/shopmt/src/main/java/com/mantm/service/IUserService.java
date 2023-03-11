package com.mantm.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mantm.dto.CartDto;
import com.mantm.dto.UserDto;

@Service
public interface IUserService {

	List<UserDto> findAll();

	CartDto findCartUser(long userId);

	UserDto findOneByUserId(long userId);
	
}
