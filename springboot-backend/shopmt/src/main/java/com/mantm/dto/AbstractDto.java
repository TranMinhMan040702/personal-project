package com.mantm.dto;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import lombok.Data;


@Data
public class AbstractDto<T> {
	private Long id;
	private String createdBy;
	private Date createdAt;
	private String updatedBy;
	private Date updatedAt;
	private List<T> listResult = new ArrayList<>();

}
