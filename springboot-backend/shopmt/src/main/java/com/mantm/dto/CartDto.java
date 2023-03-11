package com.mantm.dto;

import java.util.List;

import lombok.Data;
import lombok.EqualsAndHashCode;


@Data
@EqualsAndHashCode(callSuper = true)
public class CartDto extends AbstractDto<CartDto>{
	
	List<CartItemDto> cartItems;
	
}
