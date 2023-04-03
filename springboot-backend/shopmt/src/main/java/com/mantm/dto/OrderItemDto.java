package com.mantm.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true) 
public class OrderItemDto extends AbstractDto<OrderItemDto>{
	
	private long orderId;
	private int count;
	private ProductDto product;
	
}
