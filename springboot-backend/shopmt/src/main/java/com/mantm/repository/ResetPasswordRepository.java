package com.mantm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mantm.entity.Reset_Password;

@Repository
public interface ResetPasswordRepository extends JpaRepository<Reset_Password, Long> {
	Reset_Password findByCodeAndEmail(String code, String email);
}
