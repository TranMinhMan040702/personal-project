package com.mantm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mantm.entity.Token;

@Repository
public interface TokenRepository extends JpaRepository<Token, Long> {
	Token findByRefreshTokenAndUserId(String refreshToken, long userId);
}
