package com.mantm.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mantm.dto.ReviewDto;

@Service
public interface IReviewService {

	ReviewDto createReview(ReviewDto reviewDto);

	List<ReviewDto> getAllReviewByProduct(long productId);

	List<ReviewDto> getAllReviewByUser(long userId);

}
