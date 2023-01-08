package com.mantm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mantm.entity.Category;


@Repository
public interface CategoryRepository extends JpaRepository<Category, Long>{

}
