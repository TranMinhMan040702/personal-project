package com.mantm.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.mantm.contains.OrderStatusContain;
import com.mantm.convert.OrderConvert;
import com.mantm.dto.OrderDto;
import com.mantm.dto.OrderItemDto;
import com.mantm.entity.Order;
import com.mantm.entity.Product;
import com.mantm.entity.StatusOrderEnum;
import com.mantm.entity.User;
import com.mantm.exception.ResourceNotFoundException;
import com.mantm.repository.CartRepository;
import com.mantm.repository.OrderRepository;
import com.mantm.repository.ProductRepository;
import com.mantm.repository.UserRepository;
import com.mantm.service.IOrderService;

@Component
@Transactional
public class OrderServiceImpl implements IOrderService {

	@Autowired
	OrderRepository orderRepository;
	@Autowired
	ProductRepository productRepository;
	@Autowired
	CartRepository cartRepository;
	@Autowired
	UserRepository userRepository;
	@Autowired
	OrderConvert orderConvert;

	@Override
	public OrderDto createOrder(OrderDto orderDto) throws ResourceNotFoundException {
		Order order = orderConvert.convertToEntity(orderDto);
		order = orderRepository.save(order);
		updateQuantityAndSoldProduct(orderDto.getOrderItems());
		return orderConvert.convertToDto(order);
	}

	private void updateQuantityAndSoldProduct(List<OrderItemDto> orderItem) {
		for (OrderItemDto item : orderItem) {
			Optional<Product> product = productRepository.findById(item.getProduct().getId());
			product.get().setQuantity(product.get().getQuantity() - item.getCount());
			product.get().setSold(item.getCount());
			productRepository.save(product.get());
		}
	}

	@Override
	public List<OrderDto> findAllOrdersByUser(long userId) {
		Optional<User> user = userRepository.findById(userId);
		List<OrderDto> orderDtos = new ArrayList<>();
		List<Order> orders = orderRepository.findByUser(user.get());
		for (Order order : orders) {
			orderDtos.add(orderConvert.convertToDto(order));
		}
		return orderDtos;
	}

	@Override
	public List<OrderDto> findAllOrders() {
		List<OrderDto> orderDtos = new ArrayList<>();
		List<Order> orders = orderRepository.findAll();
		for (Order order : orders) {
			orderDtos.add(orderConvert.convertToDto(order));
		}
		return orderDtos;
	}
	
	@Override
	public List<OrderDto> findOrderByStatus(long userId, String status) {
		List<OrderDto> orderDtos = new ArrayList<>();
		Optional<User> user = userRepository.findById(userId);
		List<Order> orders = orderRepository.findByUserAndStatus(user.get(), handleStatus(status));
		for (Order order : orders) {
			orderDtos.add(orderConvert.convertToDto(order));
		}
		return orderDtos;
	}

	@Override
	public List<OrderDto> updateStatus(long orderId, String status) {
		Optional<Order> order = orderRepository.findById(orderId);
		order.get().setStatus(handleStatus(status));
		orderRepository.save(order.get());
		return findAllOrdersByUser(order.get().getUser().getId());
	}

	private StatusOrderEnum handleStatus(String status) {
		switch (status) {
		case OrderStatusContain.NOT_PROCESSED:
			return StatusOrderEnum.NOT_PROCESSED;
		case OrderStatusContain.PROCESSING:
			return StatusOrderEnum.PROCESSING;
		case OrderStatusContain.SHIPPED:
			return StatusOrderEnum.SHIPPED;
		case OrderStatusContain.DELIVERED:
			return StatusOrderEnum.DELIVERED;
		case OrderStatusContain.CANCELLED:
			return StatusOrderEnum.CANCELLED;
		default:
			return StatusOrderEnum.NOT_PROCESSED;
		}
	}
}
