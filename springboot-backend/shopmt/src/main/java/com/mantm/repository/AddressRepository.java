package com.mantm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mantm.entity.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long>{
	Address findByStatus(boolean status);
}