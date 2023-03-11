package com.mantm.dto.response;

import java.util.Set;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthResponse {

	private String accessToken;
	private String refreshToken;
	private Set<String> roles;
	private long userId;
}
