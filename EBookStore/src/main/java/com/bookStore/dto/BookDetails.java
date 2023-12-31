package com.bookStore.dto;

import org.springframework.web.multipart.MultipartFile;

public class BookDetails {

	private int bookId;
	private String title;
	private String author;
	private double price;
	private MultipartFile coverImg;
	private int stock;
	private String description;
	public int getBookId() {
		return bookId;
	}
	public void setBookId(int bookId) {
		this.bookId = bookId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public MultipartFile getCoverImg() {
		return coverImg;
	}
	public void setCoverImg(MultipartFile coverImg) {
		this.coverImg = coverImg;
	}
	public int getStock() {
		return stock;
	}
	public void setStock(int stock) {
		this.stock = stock;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
}
