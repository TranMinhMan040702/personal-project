package com.mantm.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mantm.dto.CartDto;
import com.mantm.dto.request.RegisterRequest;
import com.mantm.dto.response.UserResponse;
import com.mantm.exception.ResourceNotFoundException;

@Service
public interface IUserService {

	List<UserResponse> findAll();

	CartDto findCartUser(long userId);


}
