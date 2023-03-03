package com.mantm.service.impl;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;

import com.mantm.dto.request.AuthRequest;
import com.mantm.dto.request.RegisterRequest;
import com.mantm.dto.request.TokenRefreshRequest;
import com.mantm.dto.response.AuthResponse;
import com.mantm.entity.Role;
import com.mantm.entity.User;
import com.mantm.repository.RoleRepository;
import com.mantm.repository.UserRepository;
import com.mantm.service.IAuthenticationService;
import com.mantm.utils.JwtUtil;

@Component
public class AuthenticationServiceImpl implements IAuthenticationService{
	
	@Autowired CustomUserDetailsService customUserDetailsService;
	@Autowired UserRepository userRepository;
	@Autowired RoleRepository roleRepository;
	@Autowired JwtUtil jwtUtil;
	@Autowired AuthenticationManager authenticationManager;
	@Autowired PasswordEncoder passwordEncoder;
	
	
	@Override
	public AuthResponse register(@RequestBody RegisterRequest request) {
		
		User user = new User();
		AuthResponse authResponse = new AuthResponse();
		List<Role> roles = new ArrayList<>();
		
		for (String role : request.getRoles()) {
			roles.add(roleRepository.findByName(role));
		}
		
		BeanUtils.copyProperties(request, user, "password");
		user.setPassword(passwordEncoder.encode(request.getPassword()));
		user.setRoles(roles);
		
		userRepository.save(user);
		
		UserDetails userDetails = customUserDetailsService.loadUserByUsername(user.getEmail());
		
		String access_token = jwtUtil.generateToken(userDetails, false);
		String refresh_token = jwtUtil.generateToken(userDetails, true);
		
		authResponse.setAccessToken(access_token);
		authResponse.setRefreshToken(refresh_token);
		authResponse.setRoles(request.getRoles());
		return authResponse;	
	}

	@Override
	public AuthResponse authenticate(AuthRequest request) {
		AuthResponse authResponse = new AuthResponse();
		authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
		);
		UserDetails userDetails = customUserDetailsService.loadUserByUsername(request.getEmail());
		
		String access_token = jwtUtil.generateToken(userDetails, false);
		String refresh_token = jwtUtil.generateToken(userDetails, true);
		
		
		authResponse.setAccessToken(access_token);
		authResponse.setRefreshToken(refresh_token);
		authResponse.setRoles(getRoleUser(access_token));
		return authResponse;
	}
	
	@Override
	public AuthResponse refresh(TokenRefreshRequest request) {
		AuthResponse authResponse = new AuthResponse();
		String refresh_token = request.getTokenRefresh();
		String access_token = null;
		
		String username = jwtUtil.extractUsername(refresh_token);
		UserDetails userDetails = customUserDetailsService.loadUserByUsername(username);
		
		access_token = jwtUtil.generateToken(userDetails, false);
		refresh_token = jwtUtil.generateToken(userDetails, true);
		
		authResponse.setAccessToken(access_token);
		authResponse.setRefreshToken(refresh_token);
		authResponse.setRoles(getRoleUser(access_token));
		return authResponse;
	}
	
	public Set<String> getRoleUser(String token) {
		Set<String> roles = new HashSet<>();
		String roleUser = jwtUtil.extractRoles(token);
		for (String role : roleUser.substring(1, roleUser.length() - 1).split(", ")) {
			roles.add(role);
		}
		return roles;
	}

}
