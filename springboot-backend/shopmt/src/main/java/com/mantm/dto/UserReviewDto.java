package com.mantm.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserReviewDto extends AbstractDto<UserReviewDto> {
	
	private String firstname;
	
	private String lastname;
	
	private String avatar;
}
