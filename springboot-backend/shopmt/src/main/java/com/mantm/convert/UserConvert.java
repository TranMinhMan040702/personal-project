package com.mantm.convert;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.dto.UserDto;
import com.mantm.entity.Cart;
import com.mantm.entity.Role;
import com.mantm.entity.User;
import com.mantm.repository.CartRepository;
import com.mantm.repository.RoleRepository;

@Component
public class UserConvert {
	
	@Autowired RoleRepository roleRepository;
	@Autowired CartRepository cartRepository;

	public User convertToEntity(UserDto dto) {
		User entity = new User();
		List<Role> roles = new ArrayList<>();
		Cart cart = new Cart();
		for (String role : dto.getRoles()) {
			roles.add(roleRepository.findByName(role));
		}
		BeanUtils.copyProperties(dto, entity, "password");
		entity.setRoles(roles);
		entity.setCart(cart);
		return entity;
	}
	
	public UserDto convertToDto (User user) {
		UserDto dto = new UserDto();
		Set<String> roles = new HashSet<>();
		BeanUtils.copyProperties(user, dto);
		for (Role role : user.getRoles()) {
			roles.add(role.getName());
		}
		Cart cart = cartRepository.findByUser(user);
		dto.setCartId(cart.getId());
		dto.setRoles(roles);
		return dto;
	}
}
