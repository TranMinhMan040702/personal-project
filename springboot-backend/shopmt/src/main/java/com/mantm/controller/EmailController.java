package com.mantm.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mantm.dto.EmailDetails;
import com.mantm.service.IAuthenticationService;
import com.mantm.service.IEmailService;

@CrossOrigin({ "https://thunderous-basbousa-75b1ca.netlify.app/", "http://localhost:3000/" })
@RestController
public class EmailController {

	@Autowired
	private IEmailService emailService;
	@Autowired
	private IAuthenticationService authenticationService;

	@PostMapping("email/sendMail")
	public ResponseEntity<?> sendEmail(@RequestBody EmailDetails details) {
		return ResponseEntity.ok(emailService.sendEmailNormal(details));
	}

	@PostMapping("email/verify/{code}")
	public ResponseEntity<?> checkOtp(@PathVariable int code) {
		return ResponseEntity.ok(emailService.checkOtp(code));
	}

	@PostMapping("email/checkUserExist")
	public ResponseEntity<?> checkUserExist(@RequestBody EmailDetails details) {
		Map<Object, Object> resp = new HashMap<>();
		resp.put("Exist", authenticationService.checkUserExist(details.getRecipient()));
		return ResponseEntity.ok(resp);
	}

	@PostMapping("email/sendEmailForgotPassword")
	public ResponseEntity<?> sendEmailForgotPassword(@RequestParam String email) {
		return ResponseEntity.ok(emailService.sendEmailResetPassword(email));
	}
}
