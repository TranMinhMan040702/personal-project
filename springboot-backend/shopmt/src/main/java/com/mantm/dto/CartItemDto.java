package com.mantm.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class CartItemDto extends AbstractDto<CartItemDto>{

	private int count;
	private ProductDto product;
}
