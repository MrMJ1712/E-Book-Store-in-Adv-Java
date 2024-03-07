package com.bookStore.exceptions;

public class AddressServiceException extends RuntimeException {
	public AddressServiceException(String message, Throwable cause) {
		super(message, cause);
	}

	public AddressServiceException(String message) {
		super(message);
	}
}
