package com.mantm.service.impl;

import java.io.IOException;
import java.util.Date;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.mantm.convert.UserConvert;
import com.mantm.convert.UserPagingConvert;
import com.mantm.dto.UserDto;
import com.mantm.dto.request.ResetPasswordRequest;
import com.mantm.dto.response.ResetPasswordResponse;
import com.mantm.dto.response.UserPaging;
import com.mantm.entity.Reset_Password;
import com.mantm.entity.User;
import com.mantm.repository.ResetPasswordRepository;
import com.mantm.repository.UserRepository;
import com.mantm.service.IResetPasswordService;
import com.mantm.service.IUserService;
import com.mantm.service.specification.UserSpecification;

@Component
@Transactional
public class UserServiceImpl implements IUserService {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private UserConvert userConvert;
	@Autowired
	private UserPagingConvert userPagingConvert;
//	@Autowired
//	private IStorageService storageService;
	@Autowired
	private Cloudinary cloudinary;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private ResetPasswordRepository resetPasswordRepository;
	@Autowired
	private IResetPasswordService resetPasswordService;

	@Override
	public UserPaging findAll(Integer page, Integer limit, String sortBy, String search) {

		PageRequest paging = PageRequest.of(page, limit, Sort.by(sortBy).descending());
		Specification<User> specification = UserSpecification.getSpecification(search);

		Page<User> entitise = userRepository.findAll(specification, paging);

		return userPagingConvert.convertToDto(entitise);
	}

	@Override
	public UserDto findOneByUserId(long userId) {
		Optional<User> user = userRepository.findById(userId);
		return userConvert.convertToDto(user.get());
	}

	@Override
	public UserDto updateUser(UserDto userDto, MultipartFile file) throws Exception {
		User user = userConvert.convertToEntity(userDto);
		String avatarOld = user.getAvatar();

		if (file != null && !file.getOriginalFilename().equals(avatarOld)) {
			user.setAvatar(saveAvatarCloudinary(file));
		}
		User userResp = userRepository.save(user);
		return userConvert.convertToDto(userResp);
	}

	private String saveAvatarCloudinary(MultipartFile file) {
		Map<?, ?> r;
		try {
			r = this.cloudinary.uploader().upload(file.getBytes(),
					ObjectUtils.asMap("resource_type", "auto"));
			return (String) r.get("secure_url");
		} catch (IOException e) {
			e.printStackTrace();
		}
		return "";
	}

	@Override
	public ResetPasswordResponse resetPassword(ResetPasswordRequest resetPasswordRequest) {
		ResetPasswordResponse response = new ResetPasswordResponse();
		User user = userRepository.findByEmail(resetPasswordRequest.getEmail());

		if (user != null) {
			BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
			String passwordCurrent = resetPasswordRequest.getPasswordCurrent();
			if (encoder.matches(passwordCurrent, user.getPassword())) {
				user.setPassword(passwordEncoder.encode(resetPasswordRequest.getPasswordNew()));
				userRepository.save(user);
				response.setStatus(HttpStatus.OK.value());
				response.setMessage("Reset Password Success");
				return response;
			}
		}
		response.setStatus(HttpStatus.BAD_REQUEST.value());
		response.setMessage("Reset Password Fail");
		return response;
	}

	@Override
	public ResetPasswordResponse forgotPassword(ResetPasswordRequest resetPasswordRequest) {
		ResetPasswordResponse response = new ResetPasswordResponse();
		User user = userRepository.findByEmail(resetPasswordRequest.getEmail());

		Reset_Password reset_Password = resetPasswordRepository.findByCodeAndEmail(
				resetPasswordRequest.getCode(), resetPasswordRequest.getEmail());

		if (reset_Password != null && !reset_Password.getExpired().before(new Date())) {
			user.setPassword(passwordEncoder.encode(resetPasswordRequest.getPasswordNew()));
			userRepository.save(user);
			resetPasswordService.cleared(resetPasswordRequest.getCode(),
					resetPasswordRequest.getEmail());
			response.setStatus(HttpStatus.OK.value());
			response.setMessage("Reset Password Success");
			return response;
		}
		if (reset_Password.getExpired().before(new Date())) {
			resetPasswordService.cleared(resetPasswordRequest.getCode(),
					resetPasswordRequest.getEmail());
		}
		response.setStatus(HttpStatus.BAD_REQUEST.value());
		response.setMessage("Reset Password Fail");
		return response;
	}

	// WHEN SAVE IMAGE LOCAL
//	private String saveAvatarLocal(MultipartFile file, String avatarOld) {
//		try {
//			storageService.delete(avatarOld);
//			UUID uuid = UUID.randomUUID();
//			String id = uuid.toString();
//			String path = storageService.getStorageFileName(file, id);
//			storageService.store(file, path);
//			return path;
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return "";
//	}

}
