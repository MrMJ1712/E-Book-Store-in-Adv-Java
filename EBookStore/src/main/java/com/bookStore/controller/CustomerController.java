package com.bookStore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.bookStore.exceptions.CustomerServiceException;

import com.bookStore.dto.LoginDetails;
import com.bookStore.dto.LoginStatus;
import com.bookStore.dto.RegistrationStatus;
import com.bookStore.dto.Status;
import com.bookStore.entity.Customer;
import com.bookStore.service.CustomerService;

@RestController
@CrossOrigin
public class CustomerController {
	@Autowired
	private CustomerService customerService;
	
	@PostMapping("/customer")
	public ResponseEntity<Status> register(@RequestBody Customer customer) {
		try {
			int id = customerService.register(customer);
			RegistrationStatus status = new RegistrationStatus();
			status.setStatus(true);
			status.setMessageIfAny("Registration successful!");
			status.setCustomerId(id);
			
			return new ResponseEntity<Status>(status, HttpStatus.OK);
				
		}
		catch(CustomerServiceException e) {
			Status status = new Status();
			status.setStatus(false);
			status.setMessageIfAny(e.getMessage());
			
			
			return new ResponseEntity<Status>(status, HttpStatus.BAD_REQUEST);
		}
	}
	
	@PostMapping("/customer/login")
	public Status login(@RequestBody LoginDetails loginDetails) {
		try {
			Customer customer = customerService.login(loginDetails.getEmail(), loginDetails.getPassword());
			LoginStatus status = new LoginStatus();
			status.setStatus(true);
			status.setMessageIfAny("Login successful!");
			status.setCustomerId(customer.getCustomerId());
			status.setName(customer.getCustomerName());
			return status;
		}
		catch (CustomerServiceException e) {
			Status status = new Status();
			status.setStatus(false);
			status.setMessageIfAny(e.getMessage());
			return status;
		}
	}
	@GetMapping("/customer/{id}")
	public Customer fetchById(@PathVariable int id) {
		return customerService.fetchById(id);
	}
	
	@PutMapping("/customer/{id}")
	public String updateCustomerById(@PathVariable int id,@RequestBody Customer customer) {
		customerService.updateCustomerById(id,customer);
		return "Customer Updated Successfully..";
	}
	
}
