package com.mantm.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class UserDto extends AbstractDto<UserDto>{
	

	private String firstname;
	
	private String lastname;
	
	private String idCard;
	
	private String email;
	
	private String phone;
	
	private String avatar;

}
