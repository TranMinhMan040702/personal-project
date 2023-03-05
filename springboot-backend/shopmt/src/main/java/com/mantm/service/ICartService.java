package com.mantm.service;

import org.springframework.stereotype.Service;

import com.mantm.dto.CartDto;

@Service
public interface ICartService {

	void save(CartDto cartDto, long userId);

}
