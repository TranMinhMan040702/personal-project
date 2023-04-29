package com.mantm.dto.request;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ResetPasswordRequest {
	
	private String email;
	private String code;
	private String passwordCurrent;
	private String passwordNew;
	
}
