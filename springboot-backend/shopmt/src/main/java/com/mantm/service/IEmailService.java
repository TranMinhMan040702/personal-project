package com.mantm.service;

import java.util.Map;

import org.springframework.stereotype.Service;

import com.mantm.dto.EmailDetails;

@Service
public interface IEmailService {

	Map<Object, Object> sendEmailNormal(EmailDetails details);

	Map<Object, Object> checkOtp(int code);

}
