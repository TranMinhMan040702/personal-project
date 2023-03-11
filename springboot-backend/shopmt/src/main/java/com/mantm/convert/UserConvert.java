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
		User user = new User();
		List<Role> roles = new ArrayList<>();
		Cart cart = new Cart();
		for (String role : dto.getRoles()) {
			roles.add(roleRepository.findByName(role));
		}
		BeanUtils.copyProperties(dto, user, "password");
		user.setRoles(roles);
		user.setCart(cart);
		return user;
	}
	
	public UserDto convertToDto (User user) {
		UserDto userDto = new UserDto();
		Set<String> roles = new HashSet<>();
		BeanUtils.copyProperties(user, userDto);
		for (Role role : user.getRoles()) {
			roles.add(role.getName());
		}
		Cart cart = cartRepository.findByUser(user);
		userDto.setCartId(cart.getId());
		userDto.setRoles(roles);
		return userDto;
	}
}
