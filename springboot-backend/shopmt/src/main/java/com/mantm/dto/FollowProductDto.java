package com.mantm.dto;

import java.util.List;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class FollowProductDto extends AbstractDto<FollowProductDto>{
	
	private long userId;
	private List<ProductDto> products;
}
