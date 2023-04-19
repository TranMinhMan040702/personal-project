package com.mantm.convert;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import com.mantm.dto.UserReviewDto;
import com.mantm.entity.User;

@Component
public class UserReviewConvert {
	
	public UserReviewDto convertToDto (User user) {
		UserReviewDto dto = new UserReviewDto();
		BeanUtils.copyProperties(user, dto);
		return dto;
	}
}
