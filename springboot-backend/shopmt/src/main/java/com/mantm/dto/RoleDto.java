package com.mantm.dto;

import javax.validation.constraints.NotBlank;

import lombok.Data;
import lombok.EqualsAndHashCode;


@Data
@EqualsAndHashCode(callSuper = true)
public class RoleDto extends AbstractDto<RoleDto>{

	@NotBlank
	private String name;
	
}
