package com.mantm.dto;

import java.util.List;

import com.mantm.entiy.Product;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class CategoryDto extends AbstractDto<CategoryDto>{

	private String name;
	
	private boolean isDeleted = false;
	
	private List<Product> products;
}
