package com.mantm.dto;

import java.util.List;
import java.util.Set;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class UserDto extends AbstractDto<UserDto>{

	private String firstname;
	
	private String lastname;
	
	private String email;
	
	private String phone;
	
	private String gender;
	
	private String birthday;
	
	private Set<String> roles;
	
	private String avatar;
	
	private long cartId;
	
	private List<AddressDto> addresses;

}
