package com.mantm.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.mantm.entity.Order;
import com.mantm.entity.StatusOrderEnum;
import com.mantm.entity.User;

@Repository
public interface OrderRepository
		extends JpaRepository<Order, Long>, JpaSpecificationExecutor<Order> {
	List<Order> findByUser(User user, Sort sort);

	List<Order> findByUserAndStatus(User user, StatusOrderEnum status, Sort sort);

	List<Order> findByStatus(StatusOrderEnum status, Pageable pageable,
			Specification<Order> specification);
}
