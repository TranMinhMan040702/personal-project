package com.mantm.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "address")
public class Address extends AbstractEntity {

	@Column(name = "username")
	private String username;

	@Column(name = "phone")
	private String phone;

	@Column(name = "ward")
	private String ward;

	@Column(name = "district")
	private String district;

	@Column(name = "province")
	private String province;

	@Column(name = "street")
	private String street;

	@Column(name = "status")
	private boolean status;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
}
