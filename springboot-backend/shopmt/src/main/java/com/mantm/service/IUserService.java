package com.mantm.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mantm.dto.input.UserRegister;
import com.mantm.dto.output.UserResponse;

@Service
public interface IUserService {

	List<UserResponse> findAll();

	UserResponse save(UserRegister userRegister);

}
