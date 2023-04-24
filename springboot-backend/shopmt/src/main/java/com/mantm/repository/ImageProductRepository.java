package com.mantm.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mantm.entity.Image_Product;

@Repository
public interface ImageProductRepository extends JpaRepository<Image_Product, Long> {
	@Transactional
	void deleteByProductId(long id);

	@Transactional
	void deleteByPath(long id);
}
