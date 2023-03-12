package com.mantm.service;

import java.util.Map;

import org.springframework.stereotype.Service;

import com.mantm.dto.CartDto;
import com.mantm.dto.CartItemDto;
import com.mantm.exception.ResourceNotFoundException;

@Service
public interface ICartService {

	Map<String, String> addToCart(CartItemDto cartItemDto) throws ResourceNotFoundException;

	Map<String, String> deleteOneProductInCart(long cartItemId);

	Map<String, String> deleteAllProductInCart(long cartItemId);

	CartDto findCartUser(long userId);

}
