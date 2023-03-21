package com.mantm.dto;

import java.util.List;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class DeliveryDto extends AbstractDto<DeliveryDto>{
	
	
	@NotBlank
	private String name;
	
	@Min(0)
	@NotNull
	private double price;
	
	@NotBlank
	private String description;
	
	private boolean isDeleted = false;
	
	private List<OrderDto> orders;
}
