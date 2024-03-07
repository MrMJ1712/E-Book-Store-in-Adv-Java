package com.bookStore.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.bookStore.exceptions.CustomerServiceException;
import com.bookStore.entity.Customer;
import com.bookStore.entity.Receipt;
import com.bookStore.repository.CustomerRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class CustomerService {

	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private ReceiptService receiptService;
	
	public int register(Customer customer) {
		Long count = customerRepository.findIfCustomerExists(customer.getEmail());
		if(count == 1)
			throw new CustomerServiceException("Customer already registered!");
		else {
			customerRepository.save(customer);
			return customer.getCustomerId();
		}
	}
	
	public Customer login(String email, String password) {
		Optional<Customer> customer = customerRepository.findByEmailAndPassword(email, password);
		if(customer.isPresent())
			return customer.get();
		else
			throw new CustomerServiceException("Invalid Email/Password");
	}
	public Customer fetchById(int id) {
		Optional<Customer> customer = customerRepository.findById(id);
		if(customer.isPresent())
			return customer.get();
		else
			throw new CustomerServiceException("Customer with id " + id + " does not exist!");
	}
	
	public void updateCustomerById(int custId, Customer customer) {
		Customer temp = customerRepository.findById(custId).get();
		temp.setCustomerName(customer.getCustomerName());
		temp.setContact(customer.getContact());
		temp.setEmail(customer.getEmail());
		temp.setPassword(customer.getPassword());
		temp.setAddress(customer.getAddress());
		customerRepository.save(temp);
	}

	public List<Receipt> fetchRecieptByCustomerId(int id) {
		return receiptService.getReceiptsByCustomerId(id);
		
	}
	
}
