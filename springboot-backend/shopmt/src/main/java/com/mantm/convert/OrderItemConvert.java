package com.mantm.convert;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.dto.OrderItemDto;
import com.mantm.dto.ProductDto;
import com.mantm.entity.Order;
import com.mantm.entity.OrderItem;
import com.mantm.entity.Product;
import com.mantm.exception.ResourceNotFoundException;
import com.mantm.repository.OrderRepository;

@Component
public class OrderItemConvert {

	@Autowired ProductConvert productConvert;
	@Autowired OrderRepository orderRepository;
	
	public OrderItemDto convertToDto (OrderItem orderItem) {
		OrderItemDto dto = new OrderItemDto();
		ProductDto product = productConvert.converToDto(orderItem.getProduct());
		dto.setProduct(product);
		dto.setOrderId(orderItem.getOrder().getId());
		BeanUtils.copyProperties(orderItem, dto);
		return dto;
	}
	
	public OrderItem convertToEntity (OrderItemDto orderItemDto) throws ResourceNotFoundException {
		OrderItem entity = new OrderItem();
		Product product = productConvert.convertToEntity(orderItemDto.getProduct());
		Optional<Order> order = orderRepository.findById(orderItemDto.getOrderId());
		entity.setProduct(product);
		entity.setOrder(order.get());
		BeanUtils.copyProperties(orderItemDto, entity);
		return entity;
	}
}
