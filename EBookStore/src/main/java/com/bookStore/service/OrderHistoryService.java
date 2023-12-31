package com.bookStore.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookStore.entity.Book;
import com.bookStore.entity.Customer;
import com.bookStore.entity.OrderHistory;
import com.bookStore.exceptions.CustomerServiceException;
import com.bookStore.repository.BookRepository;
import com.bookStore.repository.CustomerRepository;
import com.bookStore.repository.OrderHistoryRepository;

@Service
public class OrderHistoryService {

	@Autowired
	private CustomerRepository custRepo;
	
	@Autowired
	private BookRepository bookRepo;
	
	@Autowired
	private OrderHistoryRepository oHRepo;
	
	public String addOrderHistory(int customerId,int bookId,int quantity) {
		Customer customer = custRepo.findById(customerId).get();
		Book book = bookRepo.findById(bookId).get();
		if(book.getStock()>quantity)
		{
		book.setStock(book.getStock()-quantity);
		OrderHistory orderHistory = new OrderHistory();
		orderHistory.setBook(book);
		orderHistory.setCustomer(customer);
		orderHistory.setAmount(book.getPrice()*quantity);
		orderHistory.setQuantity(quantity);
		oHRepo.save(orderHistory);
		bookRepo.save(book);
		}
		else
		{
			return "Out of Stock";
		}
		return "History updated Sucessfully...";
	}
}
