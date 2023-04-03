package com.mantm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mantm.entity.Order;
import com.mantm.entity.User;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
	List<Order> findByUser(User user);
}
