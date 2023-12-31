package com.bookStore.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookStore.entity.Book;
import com.bookStore.repository.BookRepository;


@Service
public class BookService {
	
	@Autowired
	private BookRepository bookRepository;
	
	public void addBook(Book book)
	{
		bookRepository.save(book);
	}
	
	public Book findBookbyId(int id) {
		return bookRepository.findById(id).get();	 
	}
	
	public List<Book> findAllBook(){
		return bookRepository.findAll();
	}
	
	public void updateBookbyId(int bookId,Book book) {
		Book temp = bookRepository.findById(bookId).get();
		temp.setAuthor(book.getAuthor());
		temp.setTitle(book.getTitle());
		temp.setDescription(book.getDescription());
		temp.setPrice(book.getPrice());
		temp.setStock(book.getStock());
		bookRepository.save(temp);
	}
	
	public void deleteBookbyId(int bookId) {
		 bookRepository.deleteById(bookId);
		
	}
}
