package com.mantm.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDto {
	
	private String address;
	
	private String phone;
	
	private String status;
	
	private boolean isPaidBefore = false;
	
	private double amountFromUser;
	
	private long userId;
	
	private DeliveryDto delivery;
	
	private List<OrderItemDto> orderItems;
	
}
