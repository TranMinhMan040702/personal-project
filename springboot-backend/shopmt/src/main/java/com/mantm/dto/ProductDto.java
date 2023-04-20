package com.mantm.dto;

import java.util.List;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class ProductDto extends AbstractDto<ProductDto>{
	
	@NotNull
	private String name;
	
	@NotNull
	private String description;
	
	@NotNull
	@Min(0)
	private double price;
	
	@NotNull
	@Min(0)
	private double promotionalPrice;
	
	@NotNull
	@Min(0)
	private int quantity;
	
	private int sold;

	private int rating;
	
	@NotNull
	private long category;
	
	private List<String> images;
}
