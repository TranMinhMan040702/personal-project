package com.mantm.service;

import java.util.Date;

import org.springframework.stereotype.Service;

@Service
public interface IResetPasswordService {

	void cleared(String code, String email);

	void save(String code, String email, Date expired);

}
