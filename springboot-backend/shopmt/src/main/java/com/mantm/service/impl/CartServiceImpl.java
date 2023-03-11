package com.mantm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.convert.ProductConvert;
import com.mantm.dto.CartItemDto;
import com.mantm.entity.Cart;
import com.mantm.entity.CartItem;
import com.mantm.entity.Product;
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
	@Autowired ProductConvert convert;
	
	@Override
	public Map<String, String> addToCart(CartItemDto cartItemDto) throws ResourceNotFoundException {
		Map<String, String> response = new HashMap<>();
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
			CartItem cartItem = new CartItem();
			Product product = convert.convertToEntity(cartItemDto.getProduct());
			cartItem.setCount(cartItemDto.getCount());
			cartItem.setProduct(product);
			cartItem.setCart(cart.get());
			cartItemRepository.save(cartItem);
		}
		response.put("Add to cart", "Add to cart successfully !");
		return response;
	}
	
	@Override
	public Map<String, String> deleteOneProductInCart(long cartItemId) {
		Map<String, String> response = new HashMap<>();
		Optional<CartItem> cartItem = cartItemRepository.findById(cartItemId);
		int newCount = cartItem.get().getCount() - 1;
		cartItem.get().setCount(newCount);
		cartItemRepository.save(cartItem.get());
		response.put("Delete one product in cart", "Delete product in cart successfully !");
		return response;
	}
	
	@Override
	public Map<String, String> deleteAllProductInCart(long cartItemId) {
		Map<String, String> response = new HashMap<>();
		Optional<CartItem> cartItem = cartItemRepository.findById(cartItemId);
		Optional<Cart> cart = cartRepository.findById(cartItem.get().getCart().getId());
		cart.get().getCartItems().removeIf(item -> item.getId().equals(cartItemId));
		cartRepository.save(cart.get());
		response.put("Delete one product in cart", "Delete product in cart successfully !");
		return response;
	}
	
}
