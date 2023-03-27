package com.mantm.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mantm.dto.AddressDto;

@Service
public interface IAddressService {

	List<AddressDto> saveAddressByUserId(AddressDto addressDto);

	List<AddressDto> findAddressByUserId(long userId);

	List<AddressDto> deleteAddressById(long id);

}
