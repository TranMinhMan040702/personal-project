package com.mantm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mantm.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{

}
