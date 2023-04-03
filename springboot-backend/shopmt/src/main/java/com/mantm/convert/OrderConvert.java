package com.mantm.convert;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.dto.DeliveryDto;
import com.mantm.dto.OrderDto;
import com.mantm.dto.OrderItemDto;
import com.mantm.entity.Order;
import com.mantm.entity.OrderItem;
import com.mantm.exception.ResourceNotFoundException;
import com.mantm.repository.DeliveryRepository;
import com.mantm.repository.UserRepository;

@Component
public class OrderConvert {
	
	
	@Autowired DeliveryConvert deliveryConvert;
	@Autowired OrderItemConvert orderItemConvert;
	@Autowired UserConvert userConvert;
	@Autowired DeliveryRepository deliveryRepository;
	@Autowired UserRepository userRepository;
	
	public OrderDto convertToDto (Order order) {
		OrderDto dto = new OrderDto();
		List<OrderItemDto> orderItemDtos = new ArrayList<>();
		DeliveryDto deliveryDto = deliveryConvert.convertToDto(order.getDelivery());
		for (OrderItem orderItem : order.getOrderItems()) {
			OrderItemDto orderItemDto = orderItemConvert.convertToDto(orderItem);
			orderItemDtos.add(orderItemDto);
		}
		dto.setDelivery(deliveryDto);
		dto.setOrderItems(orderItemDtos);
		dto.setUser(userConvert.convertToDto(order.getUser()));
		dto.setStatus(order.getStatus().toString());
		BeanUtils.copyProperties(order, dto);
		return dto;
	}
	public Order convertToEntity(OrderDto orderDto) throws ResourceNotFoundException {
		Order entity = new Order();
		List<OrderItem> orders = new ArrayList<>(); 
		entity.setDelivery(deliveryConvert.convertToEntity(orderDto.getDelivery()));
		entity.setUser(userRepository.findById(orderDto.getUser().getId()).get());
		entity.setOrderItems(orders);
		BeanUtils.copyProperties(orderDto, entity);
		for (OrderItemDto orderItemDto : orderDto.getOrderItems()) {
			OrderItem orderItem = orderItemConvert.convertToEntity(orderItemDto);
			orderItem.setOrder(entity);
			orders.add(orderItem);
		}
		return entity;
	}
}
