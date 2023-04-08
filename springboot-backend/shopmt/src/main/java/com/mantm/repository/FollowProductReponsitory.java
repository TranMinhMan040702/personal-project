package com.mantm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mantm.entity.UserFollowProduct;

@Repository
public interface FollowProductReponsitory extends JpaRepository<UserFollowProduct, Long> {

}
