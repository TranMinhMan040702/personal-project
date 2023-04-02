package com.mantm.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.mantm.repository.OrderRepository;

@Component
@Transactional
public class OrderServiceImpl {
	
	@Autowired OrderRepository orderRepository;
	
	
	
}
