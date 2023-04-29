package com.mantm.service.impl;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.entity.Reset_Password;
import com.mantm.repository.ResetPasswordRepository;
import com.mantm.service.IResetPasswordService;

@Component
public class ResetPasswordServiceImpl implements IResetPasswordService {

	@Autowired
	ResetPasswordRepository resetPasswordRepository;

	@Override
	public void save(String code, String email, Date expired) {
		Reset_Password reset_Password = new Reset_Password();
		reset_Password.setCode(code);
		reset_Password.setEmail(email);
		reset_Password.setExpired(expired);
		resetPasswordRepository.save(reset_Password);
	}

	@Override
	public void cleared(String code, String email) {
		Reset_Password reset_Password = resetPasswordRepository.findByCodeAndEmail(code, email);
		resetPasswordRepository.delete(reset_Password);
	}

}
