package com.mantm.convert;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import com.mantm.dto.UserLikeProductDto;
import com.mantm.entity.User;

@Component
public class UserLikeProductConvert {
	
	public UserLikeProductDto convertToDto(User user) {
		UserLikeProductDto userLikeProductDto = new UserLikeProductDto();
		BeanUtils.copyProperties(user, userLikeProductDto);
		return userLikeProductDto;
	}
}
