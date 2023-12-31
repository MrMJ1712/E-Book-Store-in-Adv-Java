package com.bookStore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookStore.entity.Address;

public interface AddressRepository extends JpaRepository<Address, Integer>{

}
