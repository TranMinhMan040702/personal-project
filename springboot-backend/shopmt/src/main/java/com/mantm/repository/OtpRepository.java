package com.mantm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mantm.entity.Otp;

@Repository
public interface OtpRepository extends JpaRepository<Otp, Long> {
	Otp findByCode(int code);
}
