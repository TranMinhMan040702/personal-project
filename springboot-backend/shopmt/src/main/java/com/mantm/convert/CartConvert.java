package com.mantm.convert;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.dto.CartDto;
import com.mantm.dto.CartItemDto;
import com.mantm.entity.Cart;
import com.mantm.entity.CartItem;

@Component
public class CartConvert {
	
	@Autowired CartItemConvert cartItemConvert;
	
	public CartDto convertToDto (Cart cart) {
		CartDto dto = new CartDto();
		List<CartItemDto> listCartItemDto = new ArrayList<>();
		for (CartItem cartItem : cart.getCartItems()) {
			CartItemDto cartItemDto = new CartItemDto();
			cartItemDto = cartItemConvert.convertToDto(cartItem);
			listCartItemDto.add(cartItemDto);
		}
		BeanUtils.copyProperties(cart, dto);
		dto.setCartItems(listCartItemDto);
		return dto;
	}
	
}
