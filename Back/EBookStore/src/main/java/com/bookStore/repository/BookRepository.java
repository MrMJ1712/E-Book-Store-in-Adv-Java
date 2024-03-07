package com.bookStore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookStore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Integer> {
	
	 List<Book> findByCategory(String category);
	 List<Book> findByAuthor(String author);
}
