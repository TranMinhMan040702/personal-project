package com.mantm.service.impl;

import java.io.IOException;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.mantm.convert.AddressConvert;
import com.mantm.convert.UserConvert;
import com.mantm.convert.UserPagingConvert;
import com.mantm.dto.UserDto;
import com.mantm.dto.response.UserPaging;
import com.mantm.entity.User;
import com.mantm.repository.AddressRepository;
import com.mantm.repository.RoleRepository;
import com.mantm.repository.UserRepository;
import com.mantm.service.IStorageService;
import com.mantm.service.IUserService;
import com.mantm.service.specification.UserSpecification;

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
	UserPagingConvert userPagingConvert;
	@Autowired
	IStorageService storageService;
	@Autowired
	Cloudinary cloudinary;

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

		if ((avatarOld == null || file != null && !avatarOld.equals(file.getOriginalFilename()))) {
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
