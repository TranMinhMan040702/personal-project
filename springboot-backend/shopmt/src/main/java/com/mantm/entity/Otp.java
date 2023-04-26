package com.mantm.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "otp")
public class Otp extends AbstractEntity {

	@Column(name = "code")
	private int code;

	@Column(name = "expired")
	private Date expired;
	
}
