package com.bookStore.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookStore.entity.Book;
import com.bookStore.entity.Customer;
import com.bookStore.entity.Receipt;
import com.bookStore.repository.BookRepository;
import com.bookStore.repository.CustomerRepository;
import com.bookStore.repository.ReceiptRepository;

@Service
public class ReceiptService 
{
	@Autowired
	private ReceiptRepository receiptRepository;

	@Autowired
	private BookRepository bookRepository;

	@Autowired
	private CustomerRepository customerRepository;

	public Receipt generateReceipt(int customerId, int bookId, int quantity) {
	    Customer customer = customerRepository.findById(customerId).orElse(null);
	    Book book = bookRepository.findById(bookId).orElse(null);

	    if (customer != null && book != null && book.getStock() >= quantity) {
	        double amount = book.getPrice() * quantity;
	        Receipt receipt = new Receipt();
	        receipt.setCustomer(customer);
	        receipt.setBook(book);
	        receipt.setQuantity(quantity);
	        receipt.setAmount(amount);
	        receipt.setPurchaseDate(LocalDateTime.now());

	        // Update book stock
	        book.setStock(book.getStock() - quantity);
	        bookRepository.save(book);

	        return receiptRepository.save(receipt);
	    }

	    return null; 
	}
	
	public List<Receipt> getAllReceipts(){
		return receiptRepository.findAll();
	}
	
	public List<Receipt> getReceiptsByCustomerId(int customerId) {
        return receiptRepository.getReceiptsByCustomerId(customerId);
    }
}
