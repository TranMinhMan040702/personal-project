package com.mantm.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.dto.CartDto;
import com.mantm.dto.CartItemDto;
import com.mantm.entity.Cart;
import com.mantm.entity.CartItem;
import com.mantm.entity.Image_Product;
import com.mantm.entity.Product;
import com.mantm.entity.User;
import com.mantm.repository.CartItemRepository;
import com.mantm.repository.CartRepository;
import com.mantm.repository.UserRepository;
import com.mantm.service.ICartService;

@Component
public class CartServiceImpl implements ICartService {

	@Autowired
	UserRepository userRepository;
	@Autowired
	CartRepository cartRepository;
	@Autowired
	CartItemRepository cartItemRepository;

	@Override
	public void save(CartDto cartDto, long userId) {
		Optional<User> user = userRepository.findById(userId);
		List<CartItem> listCartItem = new ArrayList<>();
		List<Image_Product> image_Products = new ArrayList<>();

		Cart cart = user.get().getCart();

		for (CartItemDto cartItemDto : cartDto.getListCartItem()) {
			CartItem cartItem = new CartItem();
			Product product = new Product();
			BeanUtils.copyProperties(cartItemDto.getProduct(), product);
			for (String image : cartItemDto.getProduct().getImages()) {
				Image_Product image_Product = new Image_Product();
				image_Product.setPath(image);
				image_Product.setProduct(product);
				image_Products.add(image_Product);	
			}
			product.setImages(image_Products);
			cartItem.setCount(cartItemDto.getCount());
			cartItem.setProduct(product);
			cartItem.setCart(cart);
			cartItemRepository.save(cartItem);
			listCartItem.add(cartItem);
		}
		BeanUtils.copyProperties(cartDto, cart, "id", "createdAt", "createdBy");
		cart.setCartItems(listCartItem);
		cart.setUser(user.get());
		cartRepository.save(cart);
	}
}
