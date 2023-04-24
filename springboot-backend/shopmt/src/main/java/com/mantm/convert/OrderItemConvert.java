package com.mantm.convert;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.dto.OrderItemDto;
import com.mantm.dto.ProductDto;
import com.mantm.entity.OrderItem;
import com.mantm.entity.Product;
import com.mantm.entity.Review;
import com.mantm.exception.ResourceNotFoundException;
import com.mantm.repository.OrderRepository;
import com.mantm.repository.ReviewRepository;

@Component
public class OrderItemConvert {

	@Autowired
	ProductConvert productConvert;
	@Autowired
	OrderRepository orderRepository;
	@Autowired
	ReviewRepository reviewRepository;

	public OrderItemDto convertToDto(OrderItem orderItem) {
		OrderItemDto dto = new OrderItemDto();
		ProductDto product = productConvert.converToDto(orderItem.getProduct());
		Review review = reviewRepository.findByOrderAndProduct(orderItem.getOrder(),
				orderItem.getProduct());
		if (review == null) {
			dto.setRating(false);
		} else {
			dto.setRating(true);
		}
		dto.setProduct(product);
		dto.setOrderId(orderItem.getOrder().getId());
		BeanUtils.copyProperties(orderItem, dto);
		return dto;
	}

	public OrderItem convertToEntity(OrderItemDto orderItemDto) throws ResourceNotFoundException {
		OrderItem entity = new OrderItem();
		Product product = productConvert.convertToEntity(orderItemDto.getProduct());
		entity.setProduct(product);
		BeanUtils.copyProperties(orderItemDto, entity);
		return entity;
	}
}
