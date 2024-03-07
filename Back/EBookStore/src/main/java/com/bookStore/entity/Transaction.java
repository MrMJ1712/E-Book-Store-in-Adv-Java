package com.bookStore.entity;

import java.sql.Date;

public class Transaction {
	private int transactionId;
	private double amount;
	private Date date;
	private String paymentMethod;
	
	private Book book;
	
	private Customer customer;
	
}