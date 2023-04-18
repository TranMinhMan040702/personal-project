package com.mantm.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ReviewDto extends AbstractDto<ReviewDto>{
	
	private String content;

	private int rating;

	private long userId;
	
	private long orderId;

	private long productId;
	
	private boolean approved;

}
