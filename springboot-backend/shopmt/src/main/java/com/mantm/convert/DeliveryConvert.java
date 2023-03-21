package com.mantm.convert;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.dto.DeliveryDto;
import com.mantm.dto.OrderDto;
import com.mantm.entity.Delivery;
import com.mantm.entity.Order;

@Component
public class DeliveryConvert {
	
	@Autowired OrderConvert orderConvert;
	
	public DeliveryDto convertToDto(Delivery delivery) {
		DeliveryDto dto = new DeliveryDto();
		List<OrderDto> orders = new ArrayList<>();
		for (Order order : delivery.getOrders()) {
			OrderDto orderDto =  orderConvert.convertToDto(order);
			orders.add(orderDto);
		}
		dto.setOrders(orders);
		BeanUtils.copyProperties(delivery, dto);		
		return dto;
	}
	
	public Delivery convertToEntity(DeliveryDto deliveryDto) {
		Delivery entity = new Delivery();
		List<Order> orders = new ArrayList<>();
		for (OrderDto orderDto : deliveryDto.getOrders()) {
			Order order = orderConvert.convertToEntity(orderDto);
			orders.add(order);
		}
		entity.setOrders(orders);
		BeanUtils.copyProperties(deliveryDto, entity);
		return entity;
	}
}
