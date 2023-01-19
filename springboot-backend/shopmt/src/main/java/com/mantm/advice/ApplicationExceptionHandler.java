package com.mantm.advice;

import java.sql.Date;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import com.mantm.exception.ErrorMessage;
import com.mantm.exception.ResourceNotFoundException;

@RestControllerAdvice
public class ApplicationExceptionHandler {

	// Handle Specific Exception
	
	@ExceptionHandler(ResourceNotFoundException.class)
	@ResponseStatus(value = HttpStatus.NOT_FOUND)
	public ErrorMessage resourceNotFoundException(ResourceNotFoundException ex, WebRequest request) {
		ErrorMessage message = new ErrorMessage(HttpStatus.NOT_FOUND.value(), new Date(0), ex.getMessage(),
				request.getDescription(false));

		return message;
	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	@ResponseStatus(value = HttpStatus.BAD_REQUEST)
	public ErrorMessage handleInavalidArgument(MethodArgumentNotValidException ex, WebRequest request) {
		ErrorMessage message = new ErrorMessage(
				HttpStatus.BAD_REQUEST.value(),
				new Date(0),
				ex.getMessage(),
				request.getDescription(false));
		return message;
	}

	// Handling global exception

	  @ExceptionHandler(Exception.class)
	  @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
	  public ErrorMessage globalExceptionHandler(Exception ex, WebRequest request) {
	    ErrorMessage message = new ErrorMessage(
	        HttpStatus.INTERNAL_SERVER_ERROR.value(),
	        new Date(0),
	        ex.getMessage(),
	        request.getDescription(false));
	    
	    return message;
	  }

}
