package com.mantm.convert;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.dto.AddressDto;
import com.mantm.entity.Address;
import com.mantm.entity.User;
import com.mantm.repository.UserRepository;

@Component
public class AddressConvert {

	@Autowired
	UserRepository userRepository;

	public Address convertToEntity(AddressDto dto) {
		Address entity = new Address();
		Optional<User> user = userRepository.findById(dto.getUserId());
		BeanUtils.copyProperties(dto, entity, "createdAt", "createdBy");
		entity.setUser(user.get());
		return entity;
	}

	public List<AddressDto> convertToDto(List<Address> addresses) {
		List<AddressDto> dtos = new ArrayList<>();
		for (Address address : addresses) {
			AddressDto dto = new AddressDto();
			BeanUtils.copyProperties(address, dto);
			dto.setUserId(address.getUser().getId());
			dtos.add(dto);
		}
		return dtos;
	}
}
