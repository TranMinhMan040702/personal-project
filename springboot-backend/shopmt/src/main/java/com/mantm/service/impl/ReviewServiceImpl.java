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
import com.mantm.entity.User;
import com.mantm.repository.OrderRepository;
import com.mantm.repository.ProductRepository;
import com.mantm.repository.ReviewRepository;
import com.mantm.repository.UserRepository;
import com.mantm.service.IReviewService;

@Component
@Transactional
public class ReviewServiceImpl implements IReviewService {

	@Autowired
	private ReviewRepository reviewRepository;
	@Autowired
	private ProductRepository productRepository;
	@Autowired
	private OrderRepository orderRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private ReviewConvert reviewConvert;

	@Override
	public ReviewDto saveReview(ReviewDto reviewDto) {
		Optional<Order> order = orderRepository.findById(reviewDto.getOrderId());
		Optional<Product> product = productRepository.findById(reviewDto.getProductId());
		Optional<Review> review = Optional.of(new Review());

		if (order.get().getStatus() != StatusOrderEnum.DELIVERED) {
			reviewDto.setApproved(false);
			return reviewDto;
		} else {
			if (reviewDto.getId() == null) {
				Review reviewCheck = reviewRepository.findByOrderAndProduct(order.get(),
						product.get());
				if (reviewCheck != null) {
					reviewDto.setApproved(false);
					return reviewDto;
				}
				review = Optional.of(reviewConvert.converToEntity(reviewDto));
				review = Optional.of(reviewRepository.save(review.get()));
			} else {
				review = reviewRepository.findById(reviewDto.getId());
				review.get().setContent(reviewDto.getContent());
				review.get().setRating(reviewDto.getRating());
			}
			updateRatingProduct(productRepository.findById(reviewDto.getProductId()).get());
			ReviewDto resp = reviewConvert.convertToDto(review.get());
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

	@Override
	public List<ReviewDto> getAllReviewByUser(long userId) {
		List<ReviewDto> reviewDtos = new ArrayList<>();
		Optional<User> user = userRepository.findById(userId);
		List<Review> reviews = reviewRepository.findByUser(user.get());
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
