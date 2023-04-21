package com.mantm.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import com.mantm.dto.request.AuthRequest;
import com.mantm.dto.request.RegisterRequest;
import com.mantm.dto.request.TokenRefreshRequest;
import com.mantm.dto.response.AuthResponse;
import com.mantm.entity.Cart;
import com.mantm.entity.Role;
import com.mantm.entity.Token;
import com.mantm.entity.User;
import com.mantm.exception.ResourceNotFoundException;
import com.mantm.repository.RoleRepository;
import com.mantm.repository.TokenRepository;
import com.mantm.repository.UserRepository;
import com.mantm.service.IAuthenticationService;
import com.mantm.utils.JwtUtil;
import com.mantm.utils.RandomStrings;

@Component
@Transactional
public class AuthenticationServiceImpl implements IAuthenticationService {

	@Autowired
	CustomUserDetailsService customUserDetailsService;
	@Autowired
	UserRepository userRepository;
	@Autowired
	RoleRepository roleRepository;
	@Autowired
	TokenRepository tokenRepository;
	@Autowired
	JwtUtil jwtUtil;
	@Autowired
	AuthenticationManager authenticationManager;
	@Autowired
	PasswordEncoder passwordEncoder;

	@Override
	@Transactional(rollbackFor = ResourceNotFoundException.class)
	public AuthResponse register(@RequestBody RegisterRequest request)
			throws ResourceNotFoundException {

		User user = new User();
		List<Role> roles = new ArrayList<>();
		Cart cart = new Cart();
		AuthResponse authResponse = new AuthResponse();

		for (String role : request.getRoles()) {
			Role roleEntity = roleRepository.findByName(role);
			if (roleEntity == null) {
				throw new ResourceNotFoundException("Cannot find role");
			}
			roles.add(roleEntity);
		}

		BeanUtils.copyProperties(request, user, "password");
		user.setPassword(passwordEncoder.encode(request.getPassword()));
		user.setRoles(roles);
		user.setCart(cart);

		user = userRepository.save(user);

		UserDetails userDetails = customUserDetailsService.loadUserByUsername(user.getEmail());

		String access_token = jwtUtil.generateToken(userDetails, false);
		String refresh_token = createdRefreshToken(user.getId());

		authResponse.setStatus(HttpStatus.OK.value());
		authResponse.setAccessToken(access_token);
		authResponse.setRefreshToken(refresh_token);
		authResponse.setRoles(request.getRoles());
		authResponse.setUserId(user.getId());
		return authResponse;
	}

	@Override
	public AuthResponse authenticate(AuthRequest request) {
		AuthResponse authResponse = new AuthResponse();
		authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

		UserDetails userDetails = customUserDetailsService.loadUserByUsername(request.getEmail());
		User user = userRepository.findByEmail(request.getEmail());

		String access_token = jwtUtil.generateToken(userDetails, false);
		String refresh_token = createdRefreshToken(user.getId());

		authResponse.setStatus(HttpStatus.OK.value());
		authResponse.setAccessToken(access_token);
		authResponse.setRefreshToken(refresh_token);
		authResponse.setRoles(getRoleUser(access_token));
		authResponse.setUserId(user.getId());
		return authResponse;
	}

	@Override
	public AuthResponse refresh(TokenRefreshRequest request) {
		AuthResponse authResponse = new AuthResponse();
		String refresh_token = request.getTokenRefresh();
		long userId = request.getUserId();

		Token token = tokenRepository.findByRefreshTokenAndUserId(refresh_token, userId);

		if (token != null) {
			refresh_token = token.getRefreshToken();
			if (!token.getExpired().before(new Date())) {
				Optional<User> user = userRepository.findById(request.getUserId());

				UserDetails userDetails = customUserDetailsService
						.loadUserByUsername(user.get().getEmail());

				String access_token = jwtUtil.generateToken(userDetails, false);

				authResponse.setStatus(HttpStatus.OK.value());
				authResponse.setAccessToken(access_token);
				authResponse.setRefreshToken(refresh_token);
				authResponse.setRoles(getRoleUser(access_token));
				return authResponse;
			} else {
				clearedRefreshToken(request);
			}
		}
		authResponse.setStatus(HttpStatus.FORBIDDEN.value());
		return authResponse;
	}

	@Override
	public void clearedRefreshToken(TokenRefreshRequest request) {
		String refresh_token = request.getTokenRefresh();
		long userId = request.getUserId();

		Token token = tokenRepository.findByRefreshTokenAndUserId(refresh_token, userId);
		tokenRepository.delete(token);
	}

	public String createdRefreshToken(long userId) {
		Token refresh_token = new Token();

		String refreshToken = RandomStrings.randomAlphanumericString(64);
		Date expired = new Date(System.currentTimeMillis() + 7 * 24 * 60 * 1000);

		refresh_token.setRefreshToken(refreshToken);
		refresh_token.setUserId(userId);
		refresh_token.setDeviceId(null);
		refresh_token.setExpired(expired);
		refresh_token = tokenRepository.save(refresh_token);
		return refresh_token.getRefreshToken();
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
