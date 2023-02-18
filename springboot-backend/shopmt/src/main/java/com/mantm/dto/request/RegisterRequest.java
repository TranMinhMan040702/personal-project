package com.mantm.dto.request;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.NotBlank;

import com.mantm.dto.AbstractDto;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class RegisterRequest extends AbstractDto<RegisterRequest>{
	
	@NotBlank
	private String firstname;
	
	@NotBlank
	private String lastname;
	
	@NotBlank
	private String email;

	@NotBlank
	private String password;
	
	@NotBlank
	private Set<String> roles = new HashSet<>(Arrays.asList("USER"));
}
