package com.bookStore.entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;


@Entity
public class Book {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bookId;
	@NotNull(message = "Title shouldn't be null")
	@Size(min = 1, max = 50, message = "Author length must be between 1 and 50")
	private String title;
	
	@NotNull(message = "Auther shouldn't be null")
	@Size(min = 1, max = 50, message = "Author length must be between 1 and 50")
	private String author;
	
	@NotNull(message = "Price shouldn't be null")
	@PositiveOrZero(message = "Price must be zero or positive")
	private double price;
	private String coverImg;
	
	@NotNull(message = "Stock shouldn't be null")
	@PositiveOrZero(message = "Stock must be zero or positive")
	private int stock;
	
	private String description;
	
	@NotNull(message = "Category shouldn't be null")
	private String category;

	public void setCategory(String category) {
		this.category = category;
	}

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

	public String getCoverImg() {
		return coverImg;
	}

	public void setCoverImg(String coverImg) {
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
