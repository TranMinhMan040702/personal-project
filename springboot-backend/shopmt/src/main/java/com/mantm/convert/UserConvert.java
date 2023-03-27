package com.mantm.convert;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.dto.UserDto;
import com.mantm.entity.Cart;
import com.mantm.entity.User;
import com.mantm.repository.CartRepository;
import com.mantm.repository.RoleRepository;
import com.mantm.repository.UserRepository;

@Component
public class UserConvert {
	
	@Autowired RoleRepository roleRepository;
	@Autowired CartRepository cartRepository;
	@Autowired UserRepository userRepository;
	@Autowired RoleConvert roleConvert;
	@Autowired AddressConvert addressConvert;

	public User convertToEntity(UserDto dto) {
		Optional<User> entity = Optional.of(new User());
		
		if (dto.getId() == null) {
			Cart cart = new Cart();
			entity.get().setRoles(roleConvert.convertToEntity(dto.getRoles()));
			entity.get().setCart(cart);
		} else {
			entity = userRepository.findById(dto.getId());
		}
		BeanUtils.copyProperties(dto, entity.get(), "password", "createdAt", "createdBy");
		return entity.get();
	}
	
	public UserDto convertToDto (User user) {
		UserDto dto = new UserDto();
		BeanUtils.copyProperties(user, dto);
		Cart cart = cartRepository.findByUser(user);
		dto.setCartId(cart.getId());
		dto.setRoles(roleConvert.convertToDto(user.getRoles()));
		dto.setAddresses(addressConvert.convertToDto(user.getAddresses()));
		return dto;
	}
}
