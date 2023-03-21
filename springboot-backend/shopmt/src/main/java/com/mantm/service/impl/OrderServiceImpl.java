package com.mantm.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.repository.OrderRepository;

@Component
public class OrderServiceImpl {
	
	@Autowired OrderRepository orderRepository;
	
	
	
}
