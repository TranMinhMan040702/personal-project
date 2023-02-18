package com.mantm.dto.response;

import java.util.Set;

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
	
	private Set<String> roles;
	
	private String avatar;

}
