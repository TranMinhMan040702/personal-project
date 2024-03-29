package com.mantm.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.mantm.dto.UserDto;
import com.mantm.dto.request.ResetPasswordRequest;
import com.mantm.dto.response.ResetPasswordResponse;
import com.mantm.dto.response.UserPaging;

@Service
public interface IUserService {

	
	UserDto findOneByUserId(long userId);

	UserDto updateUser(UserDto userDto, MultipartFile file) throws Exception;

	UserPaging findAll(Integer page, Integer limit, String sortBy, String search);

	ResetPasswordResponse resetPassword(ResetPasswordRequest resetPasswordRequest);

	ResetPasswordResponse forgotPassword(ResetPasswordRequest resetPasswordRequest);

}
