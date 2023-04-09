package com.mantm.dto;

import java.util.List;

import lombok.Data;

@Data
public class LikeProductDto{
	
	private UserLikeProductDto user;
	private boolean exist;
	private List<ProductDto> products;
}
