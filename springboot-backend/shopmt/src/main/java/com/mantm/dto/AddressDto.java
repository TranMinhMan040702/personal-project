package com.mantm.dto;

import javax.validation.constraints.NotBlank;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class AddressDto extends AbstractDto<AddressDto>{
	
	@NotBlank
	private String username;
	
	@NotBlank
	private String phone;
	
	@NotBlank
	private String ward;
	
	@NotBlank
	private String district;
	
	@NotBlank
	private String province;
	
	@NotBlank
	private String street;

	@NotBlank
	private long userId;
}
