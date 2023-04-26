package com.mantm.service.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import javax.mail.internet.MimeMessage;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import com.mantm.dto.EmailDetails;
import com.mantm.entity.Otp;
import com.mantm.repository.OtpRepository;
import com.mantm.service.IEmailService;

@Component
@Transactional
public class EmailServiceImpl implements IEmailService {

	@Autowired
	private JavaMailSender javaMailSender;
	@Autowired
	private OtpRepository otpRepository;

	@Value("${spring.mail.username}")
	private String sender;

	private String getRandom() {
		Random rnd = new Random();
		int number = rnd.nextInt(999999);
		return String.format("%06d", number);
	}

	@Override
	public Map<Object, Object> sendEmailNormal(EmailDetails details) {
		Map<Object, Object> resp = new HashMap<>();
		try {
			MimeMessage message = javaMailSender.createMimeMessage();
			MimeMessageHelper mailMessage = new MimeMessageHelper(message);

			int code = Integer.parseInt(getRandom());
			Date expired = new Date(System.currentTimeMillis() + 4 * 60 * 1000);
			Otp otp = new Otp();
			otp.setCode(code);
			otp.setExpired(expired);
			otpRepository.save(otp);

			mailMessage.setFrom(sender, "Shopmt Verify");
			mailMessage.setTo(details.getRecipient());
			mailMessage.setText(
					"<b>Vui lòng nhập mã code để xác nhận</b><br/>" + "<h1>" + code + "</h1>",
					true);
			mailMessage.setSubject("Xác nhận Email");

			javaMailSender.send(message);
			resp.put("Error", false);
			resp.put("Message", "Mail Sent Successfully..");
		} catch (Exception e) {
			resp.put("Error", true);
			resp.put("Message", "Error while Sending Email");
		}
		return resp;
	}

	@Override
	public Map<Object, Object> checkOtp(int code) {
		Map<Object, Object> resp = new HashMap<>();
		Otp otp = otpRepository.findByCode(code);

		if (otp != null && !otp.getExpired().before(new Date())) {
			resp.put("Checked", true);
			otpRepository.delete(otp);
		} else {
			resp.put("Cluôhecked", false);
		}

		return resp;
	}
}
