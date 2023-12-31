package com.bookStore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bookStore.entity.OrderHistory;
import com.bookStore.service.OrderHistoryService;

@RestController
public class OrderHistoryController {
	@Autowired
	private OrderHistoryService ohservice;
	@GetMapping("/History")
	public String addHistory(@RequestParam int customerId, @RequestParam int bookId,@RequestParam int quantity) {
		String message = ohservice.addOrderHistory(customerId, bookId, quantity);
		return message;
	}
}
