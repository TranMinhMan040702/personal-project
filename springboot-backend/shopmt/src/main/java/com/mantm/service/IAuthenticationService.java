package com.mantm.service;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.mantm.dto.request.AuthRequest;
import com.mantm.dto.request.RegisterRequest;
import com.mantm.dto.request.TokenRefreshRequest;
import com.mantm.dto.response.AuthResponse;

@Service
public interface IAuthenticationService {

	AuthResponse authenticate(AuthRequest request);

	AuthResponse register(@RequestBody RegisterRequest request);

	AuthResponse refresh(TokenRefreshRequest request);

}
