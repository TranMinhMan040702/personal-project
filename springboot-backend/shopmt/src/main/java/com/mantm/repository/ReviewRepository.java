package com.mantm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mantm.entity.Order;
import com.mantm.entity.Product;
import com.mantm.entity.Review;
import com.mantm.entity.User;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
	List<Review> findByProduct(Product product);

	List<Review> findByUser(User user);

	long countByRating(int rating);

	Review findByOrderAndProduct(Order order, Product product);
}
