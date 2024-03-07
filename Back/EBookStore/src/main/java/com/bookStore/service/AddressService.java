package com.bookStore.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookStore.exceptions.CustomerServiceException;
import com.bookStore.entity.Address;
import com.bookStore.exceptions.AddressServiceException;
import com.bookStore.repository.AddressRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class AddressService {
	
	@Autowired
	private AddressRepository addressRepository;
	
	public void addAddress(Address address) {		
		addressRepository.save(address);
	}
	
	public Address getAddressById(int id) {
		Optional<Address> address =  addressRepository.findById(id);
		if(address.isPresent()) {
			return address.get();
		}
		else {
			throw new AddressServiceException("Address Not Found");
		}
	}
	public void updateAddressById(int addrId, Address address) {
		Address temp = addressRepository.findById(addrId).get();
		temp.setArea(address.getArea());
		temp.setCity(address.getCity());
		temp.setLocality(address.getLocality());
		temp.setPincode(address.getPincode());
		temp.setState(address.getState());
		 addressRepository.save(temp);
	}
}
