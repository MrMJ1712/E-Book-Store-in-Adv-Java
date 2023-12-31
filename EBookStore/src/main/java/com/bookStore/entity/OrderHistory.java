package com.bookStore.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class OrderHistory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int hid;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "bookId")
	private Book book;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "customerId")
	private Customer customer;
	private int quantity;
	private double amount;
	
	

	public int getHid() {
		return hid;
	}

	public void setHid(int hid) {
		this.hid = hid;
	}

	public Book getBook() {
		return book;
	}

	public void setBook(Book book) {
		this.book = book;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}


	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	
	
}
