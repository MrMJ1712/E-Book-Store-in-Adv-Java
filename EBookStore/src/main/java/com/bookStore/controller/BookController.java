package com.bookStore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bookStore.entity.Book;
import com.bookStore.service.BookService;

import jakarta.websocket.server.PathParam;

@RestController
@CrossOrigin
public class BookController {
	
	@Autowired
	private BookService bookService;
	
	@PostMapping("/book")
	public String insertBook(@RequestBody Book book)
	{
		bookService.addBook(book);
		return "Book Added Sucessfuly...";
	}
	
	@GetMapping("/book")
	public List<Book> getAllBook(){
		
		return bookService.findAllBook();
	}
	
	@GetMapping("/book/{bookId}")
	public Book getBook(@PathVariable int bookId){
		
		return bookService.findBookbyId(bookId);
	}
	
	@PutMapping("/book/{bookId}")
	public String updateBook(@PathVariable int bookId, @RequestBody Book book)
	{
		bookService.updateBookbyId(bookId,book);
		return "Book Updated Successfully...";
	}
	
	@DeleteMapping("/book/{bookId}")
	public String deleteBook(@PathVariable int bookId) {
		bookService.deleteBookbyId(bookId);
		return "Book Deleted sucessfuly";
	}
	
	
}
