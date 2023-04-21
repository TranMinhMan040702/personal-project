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
@Table(name = "token")
public class Token extends AbstractEntity {

	@Column(name = "refresh_token")
	@NotNull
	private String refreshToken;

	@Column(name = "device_id")
	private String deviceId;

	@Column(name = "user_id")
	@NotNull
	private long userId;
	
	@Column(name="expired")
	private Date expired;

}
