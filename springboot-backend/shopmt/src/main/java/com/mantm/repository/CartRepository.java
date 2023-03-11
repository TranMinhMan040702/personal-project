package com.mantm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mantm.entity.Cart;
import com.mantm.entity.User;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long>{
	Cart findByUser (User user);
}
