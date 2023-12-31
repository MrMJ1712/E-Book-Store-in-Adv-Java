package com.bookStore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookStore.entity.OrderHistory;

public interface OrderHistoryRepository extends JpaRepository<OrderHistory, Integer>{

}
