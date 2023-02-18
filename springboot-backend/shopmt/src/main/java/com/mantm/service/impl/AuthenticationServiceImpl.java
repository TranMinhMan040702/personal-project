package com.mantm.service.impl;

import java.util.ArrayList;
import java.util.List;

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
		List<Role> roles = new ArrayList<>();
		
		for (String role : request.getRoles()) {
			roles.add(roleRepository.findByName(role));
		}
		
		BeanUtils.copyProperties(request, user, "password");
		user.setPassword(passwordEncoder.encode(request.getPassword()));
		user.setRoles(roles);
		
		userRepository.save(user);
		
		UserDetails userDetails = customUserDetailsService.loadUserByUsername(user.getEmail());
		
		String token = jwtUtil.generateToken(userDetails);
		
		return new AuthResponse(token);
		
	}

	@Override
	public AuthResponse authenticate(AuthRequest request) {
		authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
		);
		UserDetails userDetails = customUserDetailsService.loadUserByUsername(request.getEmail());
		String token = jwtUtil.generateToken(userDetails);
		
		return new AuthResponse(token);
	}

}