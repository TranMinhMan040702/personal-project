package com.mantm.dto.request;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UpdateQuantityAndPriceProduct {

	private long id;
	
	@NotNull
	@Min(0)
	private double price;
	
	@NotNull
	@Min(0)
	private double promotionalPrice;

	@NotNull
	@Min(0)
	private int quantity;
	
}
