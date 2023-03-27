package com.mantm.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.convert.AddressConvert;
import com.mantm.dto.AddressDto;
import com.mantm.entity.Address;
import com.mantm.entity.User;
import com.mantm.repository.AddressRepository;
import com.mantm.repository.UserRepository;
import com.mantm.service.IAddressService;

@Component
public class AddressServiceImpl implements IAddressService{
	
	@Autowired UserRepository userRepository;
	@Autowired AddressRepository addressRepository;
	@Autowired AddressConvert addressConvert;
	
	@Override
	public List<AddressDto> findAddressByUserId(long userId) {
		return addressConvert.convertToDto(userRepository.findById(userId).get().getAddresses());
	}
	
	@Override
	public List<AddressDto> saveAddressByUserId(AddressDto addressDto) {
		Optional<User> user = userRepository.findById(addressDto.getUserId());
		List<Address> addresses = user.get().getAddresses();
		for (Address address : addresses) {
			if (address.getId() == addressDto.getId()) {
				BeanUtils.copyProperties(addressDto, address, "createdAt", "createdBy", "id");
				addressRepository.save(address);
				return addressConvert.convertToDto(addresses);
			}
		}
		addresses.add(addressConvert.convertToEntity(addressDto));
		return addressConvert.convertToDto(userRepository.save(user.get()).getAddresses());
	}
	
	@Override
	public List<AddressDto> deleteAddressById(long id) {
		long userId = addressRepository.findById(id).get().getUser().getId();
		addressRepository.deleteById(id);
		return addressConvert.convertToDto(userRepository.findById(userId).get().getAddresses());
	}
}
