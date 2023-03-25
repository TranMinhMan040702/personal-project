package com.mantm.convert;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.dto.DeliveryDto;
import com.mantm.dto.OrderDto;
import com.mantm.dto.OrderItemDto;
import com.mantm.entity.Delivery;
import com.mantm.entity.Order;
import com.mantm.entity.OrderItem;
import com.mantm.exception.ResourceNotFoundException;
import com.mantm.repository.DeliveryRepository;

@Component
public class OrderConvert {
	
	
	@Autowired DeliveryConvert deliveryConvert;
	@Autowired OrderItemConvert orderItemConvert;
	@Autowired DeliveryRepository deliveryRepository;
	
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
		// kiem tra lai status
		return dto;
	}
	public Order convertToEntity(OrderDto orderDto) throws ResourceNotFoundException {
		Order entity = new Order();
		List<OrderItem> orders = new ArrayList<>(); 
		Delivery delivery = deliveryConvert.convertToEntity(orderDto.getDelivery());
		for (OrderItemDto orderItemDto : orderDto.getOrderItems()) {
			OrderItem orderItem = orderItemConvert.convertToEntity(orderItemDto);
			orders.add(orderItem);
		}
		entity.setDelivery(delivery);
		entity.setOrderItems(orders);
		// kiem tra status
		return entity;
	}
}
