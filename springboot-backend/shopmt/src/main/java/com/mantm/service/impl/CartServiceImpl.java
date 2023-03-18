package com.mantm.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.convert.CartConvert;
import com.mantm.convert.CartItemConvert;
import com.mantm.convert.ProductConvert;
import com.mantm.dto.CartDto;
import com.mantm.dto.CartItemDto;
import com.mantm.entity.Cart;
import com.mantm.entity.CartItem;
import com.mantm.entity.User;
import com.mantm.exception.ResourceNotFoundException;
import com.mantm.repository.CartItemRepository;
import com.mantm.repository.CartRepository;
import com.mantm.repository.UserRepository;
import com.mantm.service.ICartService;

@Component
public class CartServiceImpl implements ICartService {

	@Autowired UserRepository userRepository;
	@Autowired CartRepository cartRepository;
	@Autowired CartItemRepository cartItemRepository;
	@Autowired ProductConvert productConvert;
	@Autowired CartItemConvert cartItemConvert;
	@Autowired CartConvert cartConvert;
	
	@Override
	public CartDto findCartUser(long userId) {
		Optional<User> user = userRepository.findById(userId);
		Cart cart = user.get().getCart();
		return cartConvert.convertToDto(cart);
	}
	
	@Override
	public CartDto addToCart(CartItemDto cartItemDto) throws ResourceNotFoundException {
		Optional<Cart> cart = cartRepository.findById(cartItemDto.getCartId());
		List<CartItem> cartItems = cart.get().getCartItems();
		boolean hasInCart = false;
		for (CartItem cartItem : cartItems) {
			if (cartItem.getProduct().getId() == cartItemDto.getProduct().getId()) {
				int newCount = cartItem.getCount() + cartItemDto.getCount();
				cartItem.setCount(newCount);
				cartItemRepository.save(cartItem);
				hasInCart = true;
				break;
			}
		}
		if (!hasInCart) {
//			cartItemRepository.save(cartItemConvert.converToEntity(cartItemDto));
			cart.get().getCartItems().add(cartItemConvert.converToEntity(cartItemDto));
			cartRepository.save(cart.get());
		}
		return cartConvert.convertToDto(cart.get());
	}
	
	@Override
	public CartDto deleteOneProductInCart(long cartItemId) {
		Optional<CartItem> cartItem = cartItemRepository.findById(cartItemId);
		Optional<Cart> cart = cartRepository.findById(cartItem.get().getCart().getId());
		int newCount = cartItem.get().getCount() - 1;
		cartItem.get().setCount(newCount);
		cartRepository.save(cart.get());
		return cartConvert.convertToDto(cart.get());
	}
	
	@Override
	public CartDto deleteAllProductInCart(long cartItemId) {
		Optional<CartItem> cartItem = cartItemRepository.findById(cartItemId);
		Optional<Cart> cart = cartRepository.findById(cartItem.get().getCart().getId());
		cart.get().getCartItems().removeIf(item -> item.getId().equals(cartItemId));
		cartRepository.save(cart.get());
		return cartConvert.convertToDto(cart.get());
	}
	
}
