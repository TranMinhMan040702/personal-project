package com.mantm.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.mantm.dto.request.AuthRequest;
import com.mantm.dto.request.RegisterRequest;
import com.mantm.dto.response.AuthResponse;

@Service
public interface IAuthenticationService {

	AuthResponse authenticate(AuthRequest request);

	AuthResponse register(@RequestBody RegisterRequest request);

	AuthResponse refresh(HttpServletRequest request, HttpServletResponse response);

}
