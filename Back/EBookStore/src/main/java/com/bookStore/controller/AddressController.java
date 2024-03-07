package com.bookStore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bookStore.dto.RegistrationStatus;
import com.bookStore.dto.Status;
import com.bookStore.entity.Address;
import com.bookStore.entity.Customer;
import com.bookStore.repository.AddressRepository;
import com.bookStore.service.AddressService;
import com.bookStore.service.CustomerService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin
public class AddressController {
	@Autowired
	private AddressService addressService;
	
	@Autowired
	private CustomerService customerServise;
	
	@PostMapping("/address/{custId}")
	public String register(@RequestBody @Valid Address address,@PathVariable int custId) {
		
			Customer customer = customerServise.fetchById(custId);
			customer.setAddress(address);
			customerServise.updateCustomerById(custId, customer);
			addressService.addAddress(address);	
			return "Address Add sucessfully....";
	}
				
	@GetMapping("/address/{id}")
	public Address getAddress(@PathVariable int id) {
		Address temp = addressService.getAddressById(id);
		return temp;
	}
	@PutMapping("/address/{id}")
	public String updateAddressById(@PathVariable int id,@RequestBody Address address) {
		addressService.updateAddressById(id,address);
		return "Address Updated Successfully..";
	}
	
}
