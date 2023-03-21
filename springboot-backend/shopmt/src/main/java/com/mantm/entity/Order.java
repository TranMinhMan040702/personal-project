package com.mantm.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="orders")
public class Order extends AbstractEntity{
	
	@NotNull
	@Column(name="address")
	private String address;
	
	@NotNull
	@Column(name="phone")
	private String phone;
	
	@NotNull
	@Enumerated(EnumType.STRING)
	@Column(name="status")
	private StatusOrderEnum status = StatusOrderEnum.NOT_PROCESSED;
	
	@Column(name="is_paid_before")
	private boolean isPaidBefore = false;
	
	@NotNull
	@Min(0)
	@Column(name="amount_from_user")
	private double amountFromUser;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private User user;
	
	@ManyToOne
	@JoinColumn(name="delivery_id")
	private Delivery delivery;
	
	@OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
	private List<OrderItem> orderItems;
	
	@OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
	private List<Review> reviews;
}
