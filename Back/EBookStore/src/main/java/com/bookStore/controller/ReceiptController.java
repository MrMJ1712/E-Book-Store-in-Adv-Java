package com.bookStore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bookStore.entity.Receipt;
import com.bookStore.service.ReceiptService;

@RestController
@CrossOrigin
public class ReceiptController {
	
	@Autowired
	private ReceiptService receiptService;

	@PostMapping("/generate-receipt/{bookId}/{customerId}/{quantityId}")
	public ResponseEntity<?> generateReceipt(@PathVariable int bookId, @PathVariable int customerId, @PathVariable int quantityId) {
	    Receipt receipt = receiptService.generateReceipt(customerId, bookId, quantityId);
	    if (receipt != null) {
	        return ResponseEntity.ok(receipt);
	    } else {
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Unable to generate receipt. Please check the input data.");
	    }
	}

	@GetMapping("/order-History")
	public List<Receipt> getReceipt(){
		return receiptService.getAllReceipts();
	}

	@GetMapping("/order-History/{customerId}")
	public List<Receipt> getReceiptById(@PathVariable int customerId){
		return receiptService.getReceiptsByCustomerId(customerId);
	}
}
