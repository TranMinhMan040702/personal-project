package com.mantm.service;

import org.springframework.stereotype.Service;

import com.mantm.dto.CartDto;
import com.mantm.dto.CartItemDto;
import com.mantm.exception.ResourceNotFoundException;

@Service
public interface ICartService {

	CartDto addToCart(CartItemDto cartItemDto) throws ResourceNotFoundException;

	CartDto deleteOneProductInCart(long cartItemId);

	CartDto deleteAllProductInCart(long cartItemId);

	CartDto findCartUser(long userId);

}
