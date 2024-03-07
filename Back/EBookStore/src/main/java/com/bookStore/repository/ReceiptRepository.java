package com.bookStore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.PathVariable;

import com.bookStore.entity.Book;
import com.bookStore.entity.Customer;
import com.bookStore.entity.Receipt;

public interface ReceiptRepository extends JpaRepository<Receipt, Integer> {

	@Query(value = "SELECT * FROM Receipt WHERE customerId = ?1", nativeQuery = true)
    List<Receipt> getReceiptsByCustomerId(int customer);
	 String removeByBook(Book book);
	// List<Receipt> findByCustomerId(Customer customerId);
}
