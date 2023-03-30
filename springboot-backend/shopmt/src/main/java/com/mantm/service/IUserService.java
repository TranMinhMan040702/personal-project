package com.mantm.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.mantm.dto.UserDto;

@Service
public interface IUserService {

	List<UserDto> findAll();

	UserDto findOneByUserId(long userId);

	UserDto updateUser(UserDto userDto, MultipartFile file) throws Exception;

}
