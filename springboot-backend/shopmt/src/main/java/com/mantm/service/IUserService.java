package com.mantm.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mantm.dto.UserDto;

@Service
public interface IUserService {

	List<UserDto> findAll();

	UserDto findOneByUserId(long userId);
	
}
