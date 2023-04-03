package com.mantm.dto;

import java.util.List;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class OrderDto extends AbstractDto<OrderDto>{
	
	private String address;
	
	private String phone;
	
	private String status;
	
	private boolean isPaidBefore = false;
	
	private double amountFromUser;
	
	private UserDto user;
	
	private DeliveryDto delivery;
	
	private List<OrderItemDto> orderItems;
	
}
