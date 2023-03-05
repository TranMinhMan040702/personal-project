package com.mantm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mantm.entity.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long>{

}
