package com.mantm.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "reset_password")
public class Reset_Password extends AbstractEntity {

	@Column(name = "code")
	@NotNull
	private String code;

	@Column(name = "email")
	@NotNull
	private String email;

	@Column(name = "expired")
	private Date expired;
}
