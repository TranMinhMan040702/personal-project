package com.mantm.dto.output;

import com.mantm.dto.AbstractDto;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class UserResponse extends AbstractDto<UserResponse>{

	private String firstname;
	
	private String lastname;
	
	private String idCard;
	
	private String email;
	
	private String phone;
	
	private String role;
	
	private String avatar;

}
