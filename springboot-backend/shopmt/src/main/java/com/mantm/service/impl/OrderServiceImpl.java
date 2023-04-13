package com.mantm.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.mantm.convert.OrderConvert;
import com.mantm.dto.OrderDto;
import com.mantm.dto.OrderItemDto;
import com.mantm.entity.Order;
import com.mantm.entity.Product;
import com.mantm.entity.User;
import com.mantm.exception.ResourceNotFoundException;
import com.mantm.repository.CartRepository;
import com.mantm.repository.OrderRepository;
import com.mantm.repository.ProductRepository;
import com.mantm.repository.UserRepository;
import com.mantm.service.IOrderService;
import com.mantm.service.specification.OrderSpecification;
import com.mantm.utils.HandleStatusOrder;

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
	CartServiceImpl cartServiceImpl;
	@Autowired
	OrderConvert orderConvert;
	
	@Override
	public List<OrderDto> findAllOrdersByStatusWithPaginationAndSort(String status, Integer page,
			Integer limit, String sortBy, String search) {

		List<OrderDto> orderDtos = new ArrayList<>();

		PageRequest paging = PageRequest.of(page, limit, Sort.by(sortBy).descending());
		Specification<Order> specification = OrderSpecification.getSpecification(status, search);

		Page<Order> orders = orderRepository.findAll(specification, paging);

		for (Order order : orders) {
			orderDtos.add(orderConvert.convertToDto(order));
		}

		return orderDtos;
	}

	@Override
	public OrderDto createOrder(OrderDto orderDto) throws ResourceNotFoundException {
		Order order = orderConvert.convertToEntity(orderDto);
		order = orderRepository.save(order);
		updateQuantityAndSoldProduct(orderDto.getOrderItems());
		cartServiceImpl.clearedCart(order.getUser().getCart().getId());
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
		List<Order> orders = orderRepository.findByUser(user.get(),
				Sort.by("createdAt").descending());
		for (Order order : orders) {
			orderDtos.add(orderConvert.convertToDto(order));
		}
		return orderDtos;
	}

	@Override
	public OrderDto findOrderById(long orderId) {
		Optional<Order> order = orderRepository.findById(orderId);
		return orderConvert.convertToDto(order.get());
	}

	@Override
	public List<OrderDto> findOrderByStatus(long userId, String status) {
		List<OrderDto> orderDtos = new ArrayList<>();
		Optional<User> user = userRepository.findById(userId);

		List<Order> orders = orderRepository.findByUserAndStatus(user.get(),
				HandleStatusOrder.handleStatus(status), Sort.by("createdAt").descending());

		for (Order order : orders) {
			orderDtos.add(orderConvert.convertToDto(order));
		}
		return orderDtos;
	}

	@Override
	public List<OrderDto> updateStatus(long orderId, String status) {
		Optional<Order> order = orderRepository.findById(orderId);
		order.get().setStatus(HandleStatusOrder.handleStatus(status));
		orderRepository.save(order.get());
		return findAllOrdersByUser(order.get().getUser().getId());
	}

	@Override
	public List<OrderDto> deleteOrder(long orderId) {
		Optional<Order> order = orderRepository.findById(orderId);
		orderRepository.delete(order.get());
		List<OrderDto> orderDtos = new ArrayList<>();
		List<Order> orders = orderRepository.findByUser(order.get().getUser(),
				Sort.by("createdAt").descending());
		for (Order o : orders) {
			orderDtos.add(orderConvert.convertToDto(o));
		}
		return orderDtos;
	}

}
