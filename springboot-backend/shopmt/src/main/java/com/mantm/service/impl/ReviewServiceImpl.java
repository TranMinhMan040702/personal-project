package com.mantm.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.mantm.convert.ReviewConvert;
import com.mantm.dto.ReviewDto;
import com.mantm.entity.Order;
import com.mantm.entity.Product;
import com.mantm.entity.Review;
import com.mantm.entity.StatusOrderEnum;
import com.mantm.repository.OrderRepository;
import com.mantm.repository.ProductRepository;
import com.mantm.repository.ReviewRepository;
import com.mantm.service.IReviewService;

@Component
@Transactional
public class ReviewServiceImpl implements IReviewService {

	@Autowired
	ReviewRepository reviewRepository;
	@Autowired
	ProductRepository productRepository;
	@Autowired
	OrderRepository orderRepository;
	@Autowired
	ReviewConvert reviewConvert;

	@Override
	public ReviewDto createReview(ReviewDto reviewDto) {
		Optional<Order> order = orderRepository.findById(reviewDto.getOrderId());
		if (order.get().getStatus() != StatusOrderEnum.DELIVERED) {
			reviewDto.setApproved(false);
			return reviewDto;
		} else {
			Review review = reviewConvert.converToEntity(reviewDto);
			review = reviewRepository.save(review);
			updateRatingProduct(productRepository.findById(reviewDto.getProductId()).get());
			ReviewDto resp = reviewConvert.convertToDto(review);
			resp.setApproved(true);
			return resp;
		}
	}

	@Override
	public List<ReviewDto> getAllReviewByProduct(long productId) {
		List<ReviewDto> reviewDtos = new ArrayList<>();
		Optional<Product> product = productRepository.findById(productId);
		List<Review> reviews = reviewRepository.findByProduct(product.get());
		for (Review review : reviews) {
			reviewDtos.add(reviewConvert.convertToDto(review));
		}
		return reviewDtos;
	}

	private void updateRatingProduct(Product product) {
		List<Review> reviews = product.getReviews();
		int count = 0;

		for (Review review : reviews) {
			count += review.getRating();
		}

		product.setRating(Math.round(count / reviews.size()));
		productRepository.save(product);
	}

}
