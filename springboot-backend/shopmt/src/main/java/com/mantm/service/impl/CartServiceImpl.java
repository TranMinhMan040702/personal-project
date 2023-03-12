package com.mantm.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.convert.ProductConvert;
import com.mantm.dto.CartDto;
import com.mantm.dto.CartItemDto;
import com.mantm.dto.ProductDto;
import com.mantm.entity.Cart;
import com.mantm.entity.CartItem;
import com.mantm.entity.Image_Product;
import com.mantm.entity.Product;
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
	@Autowired ProductConvert convert;
	
	@Override
	public CartDto findCartUser(long userId) {
		CartDto response = new CartDto();
		List<CartItemDto> listCartItemDto = new ArrayList<>();
		
		Optional<User> user = userRepository.findById(userId);
		Cart cart = user.get().getCart();
		
		for (CartItem cartItem : cart.getCartItems()) {
			CartItemDto cartItemDto = new CartItemDto();
			ProductDto productDto = new ProductDto();
			List<String> images = new ArrayList<>();
			BeanUtils.copyProperties(cartItem.getProduct(), productDto);
			for (Image_Product image_Product : cartItem.getProduct().getImages()) {
				images.add(image_Product.getPath());
			}
			productDto.setImages(images);
			cartItemDto.setCartId(cart.getId());
			cartItemDto.setCount(cartItem.getCount());
			cartItemDto.setProduct(productDto);
			BeanUtils.copyProperties(cartItem, cartItemDto);
			listCartItemDto.add(cartItemDto);
		}
		BeanUtils.copyProperties(cart, response);
		response.setCartItems(listCartItemDto);
		return response;
	}
	
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
