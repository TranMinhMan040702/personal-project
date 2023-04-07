package com.mantm.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mantm.dto.OrderDto;
import com.mantm.exception.ResourceNotFoundException;

@Service
public interface IOrderService {

	OrderDto createOrder(OrderDto orderDto) throws ResourceNotFoundException;

	List<OrderDto> findAllOrders();

	List<OrderDto> findAllOrdersByUser(long userId);

	List<OrderDto> updateStatus(long orderId, String status);

	List<OrderDto> findOrderByStatus(long userId, String status);

	OrderDto findOrderById(long orderId);

	List<OrderDto> deleteOrder(long orderId);

}
