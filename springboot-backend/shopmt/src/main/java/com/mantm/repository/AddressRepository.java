package com.mantm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mantm.entity.Address;
import com.mantm.entity.User;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long>{
	Address findByStatusAndUser(boolean status, User user);
}
