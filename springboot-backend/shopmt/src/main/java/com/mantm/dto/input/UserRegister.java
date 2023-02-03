package com.mantm.dto.input;

import javax.validation.constraints.NotBlank;

import com.mantm.dto.AbstractDto;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class UserRegister extends AbstractDto<UserRegister>{
	
	@NotBlank
	private String firstname;
	
	@NotBlank
	private String lastname;
	
	@NotBlank
	private String email;

	@NotBlank
	private String password;
}
