package com.mantm.exception;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ErrorMessage {
	private int status;
	private Date timestamp;
	private String message;
	private String description;
}
