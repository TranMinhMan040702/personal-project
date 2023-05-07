package com.mantm.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.mantm.convert.AddressConvert;
import com.mantm.dto.AddressDto;
import com.mantm.entity.Address;
import com.mantm.entity.User;
import com.mantm.repository.AddressRepository;
import com.mantm.repository.UserRepository;
import com.mantm.service.IAddressService;

@Component
@Transactional
public class AddressServiceImpl implements IAddressService {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private AddressRepository addressRepository;
	@Autowired
	private AddressConvert addressConvert;

	@Override
	public List<AddressDto> findAddressByUserId(long userId) {
		return addressConvert.convertToDto(userRepository.findById(userId).get().getAddresses());
	}

	@Override
	public List<AddressDto> saveAddressByUserId(AddressDto addressDto) {
		Optional<User> user = userRepository.findById(addressDto.getUserId());
		List<Address> addresses = user.get().getAddresses();
		if (addressDto.isStatus() && !addresses.isEmpty()) {
			updateStatusAddress(user.get());
		}
		if (addresses.isEmpty()) {
			addressDto.setStatus(true);
		}
		
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

	private void updateStatusAddress(User user) {
		Address address = addressRepository.findByStatusAndUser(true, user);
		if (address != null) {
			address.setStatus(false);
			addressRepository.save(address);
		}
	}

	@Override
	public List<AddressDto> deleteAddressById(long id) {
		Optional<Address> address = addressRepository.findById(id);
		User user = address.get().getUser();
		if (address.get().isStatus()) {
			return addressConvert.convertToDto(userRepository.findById(user.getId()).get().getAddresses());
		}
		user.getAddresses().remove(address.get());
		userRepository.save(user);
		return addressConvert.convertToDto(userRepository.findById(user.getId()).get().getAddresses());
	}
}
