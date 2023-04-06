package com.mantm.service.impl;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.mantm.convert.AddressConvert;
import com.mantm.convert.UserConvert;
import com.mantm.dto.UserDto;
import com.mantm.entity.User;
import com.mantm.repository.AddressRepository;
import com.mantm.repository.RoleRepository;
import com.mantm.repository.UserRepository;
import com.mantm.service.IStorageService;
import com.mantm.service.IUserService;

@Component
@Transactional
public class UserServiceImpl implements IUserService {

	@Autowired
	UserRepository userRepository;
	@Autowired
	RoleRepository roleRepository;
	@Autowired
	AddressRepository addressRepository;
	@Autowired
	UserConvert userConvert;
	@Autowired
	AddressConvert addressConvert;
	@Autowired
	IStorageService storageService;
	@Autowired
	Cloudinary cloudinary;

	@Override
	public List<UserDto> findAll() {
		List<User> entitise = userRepository.findAll();
		List<UserDto> users = new ArrayList<>();
		for (User user : entitise) {
			UserDto userResp = userConvert.convertToDto(user);
			users.add(userResp);
		}
		return users;
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
		if ((avatarOld == null || !avatarOld.equals(file.getOriginalFilename())) && file != null) {
			user.setAvatar(saveAvatarCloudinary(file));
		}
		User userResp = userRepository.save(user);
		return userConvert.convertToDto(userResp);
	}

	private String saveAvatarCloudinary(MultipartFile file) {
		Map<?, ?> r;
		try {
			r = this.cloudinary.uploader().upload(file.getBytes(), ObjectUtils.asMap("resource_type", "auto"));
			return (String) r.get("secure_url");
		} catch (IOException e) {
			e.printStackTrace();
		}
		return "";
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
