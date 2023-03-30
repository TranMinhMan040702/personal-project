package com.mantm.convert;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
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

	public User convertToEntity(UserDto dto) throws ParseException {
		Optional<User> entity = Optional.of(new User());
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		
		if (dto.getId() == null) {
			Cart cart = new Cart();
			entity.get().setRoles(roleConvert.convertToEntity(dto.getRoles()));
			entity.get().setCart(cart);
		} else {
			entity = userRepository.findById(dto.getId());
		}
		if (!(dto.getBirthday()==null)) {
			Date birthday = (Date) formatter.parse(dto.getBirthday());
			entity.get().setBirthday(birthday);
		}
		BeanUtils.copyProperties(dto, entity.get(), "password", "createdAt", "createdBy");
		return entity.get();
	}
	
	public UserDto convertToDto (User user) {
		UserDto dto = new UserDto();
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		BeanUtils.copyProperties(user, dto);
		Cart cart = cartRepository.findByUser(user);
		if (!(user.getBirthday() == null)) {
			dto.setBirthday(formatter.format(user.getBirthday()));
		}
		dto.setCartId(cart.getId());
		dto.setRoles(roleConvert.convertToDto(user.getRoles()));
		dto.setAddresses(addressConvert.convertToDto(user.getAddresses()));
		return dto;
	}
}
