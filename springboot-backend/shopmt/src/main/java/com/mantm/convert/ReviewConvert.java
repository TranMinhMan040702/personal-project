package com.mantm.convert;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.dto.ReviewDto;
import com.mantm.entity.Order;
import com.mantm.entity.Product;
import com.mantm.entity.Review;
import com.mantm.entity.User;
import com.mantm.repository.OrderRepository;
import com.mantm.repository.ProductRepository;
import com.mantm.repository.UserRepository;

@Component
public class ReviewConvert {

	@Autowired
	UserRepository userRepository;
	@Autowired
	OrderRepository orderRepository;
	@Autowired
	ProductRepository productRepository;

	public Review converToEntity(ReviewDto reviewDto) {
		Review entity = new Review();
		BeanUtils.copyProperties(reviewDto, entity);

		Optional<User> user = userRepository.findById(reviewDto.getUserId());
		Optional<Order> order = orderRepository.findById(reviewDto.getOrderId());
		Optional<Product> product = productRepository.findById(reviewDto.getProductId());

		entity.setUser(user.get());
		entity.setOrder(order.get());
		entity.setProduct(product.get());
		return entity;
	}

	public ReviewDto convertToDto(Review review) {
		ReviewDto dto = new ReviewDto();
		BeanUtils.copyProperties(review, dto);

		dto.setUserId(review.getUser().getId());
		dto.setOrderId(review.getOrder().getId());
		dto.setProductId(review.getProduct().getId());
		
		return dto;
	}
}
