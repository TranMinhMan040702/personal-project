package com.mantm.service.impl;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.dto.CartDto;
import com.mantm.dto.CartItemDto;
import com.mantm.dto.ProductDto;
import com.mantm.dto.response.UserResponse;
import com.mantm.entity.Cart;
import com.mantm.entity.CartItem;
import com.mantm.entity.Image_Product;
import com.mantm.entity.Role;
import com.mantm.entity.User;
import com.mantm.repository.RoleRepository;
import com.mantm.repository.UserRepository;
import com.mantm.service.IUserService;

@Component
public class UserServiceImpl implements IUserService{
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	RoleRepository roleRepository;
	
	@Override
	public List<UserResponse> findAll() {
		List<User> entitise = userRepository.findAll();
		List<UserResponse> users = new ArrayList<>();
		
		for (User user : entitise) {
			
			UserResponse userResp = new UserResponse();
			Set<String> roles = new HashSet<>();
			
			for (Role role : user.getRoles()) {
				roles.add(role.getName());
			}
			
			BeanUtils.copyProperties(user, userResp);
			userResp.setRoles(roles);
			users.add(userResp);
		}
		return users;
	}
	
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
			
			cartItemDto.setCount(cartItem.getCount());
			cartItemDto.setProduct(productDto);
			BeanUtils.copyProperties(cartItem, cartItemDto);
			listCartItemDto.add(cartItemDto);
		}
		BeanUtils.copyProperties(cart, response);
		response.setListCartItem(listCartItemDto);
		return response;
	}
	

}
