package com.mantm.convert;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.dto.CartItemDto;
import com.mantm.dto.ProductDto;
import com.mantm.entity.Cart;
import com.mantm.entity.CartItem;
import com.mantm.entity.Product;
import com.mantm.exception.ResourceNotFoundException;
import com.mantm.repository.CartRepository;

@Component
public class CartItemConvert {
	
	@Autowired CartRepository cartRepository;
	@Autowired ProductConvert productConvert;
	
	
	public CartItemDto convertToDto(CartItem cartItem) {
		CartItemDto dto = new CartItemDto();
		ProductDto productDto = productConvert.converToDto(cartItem.getProduct());
		BeanUtils.copyProperties(cartItem, dto);
		dto.setProduct(productDto);
		return dto;
	}
	
	public CartItem converToEntity(CartItemDto cartItemDto) throws ResourceNotFoundException {
		CartItem entity = new CartItem();
		Optional<Cart> cart = cartRepository.findById(cartItemDto.getCartId());
		Product product = productConvert.convertToEntity(cartItemDto.getProduct());
		BeanUtils.copyProperties(cartItemDto, entity);
		entity.setProduct(product);
		entity.setCart(cart.get());
		return entity;
	}
}
