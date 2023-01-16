package com.mantm.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class CategoryDto extends AbstractDto<CategoryDto>{

	private String name;
	
	private boolean isDeleted = false;
	
}
