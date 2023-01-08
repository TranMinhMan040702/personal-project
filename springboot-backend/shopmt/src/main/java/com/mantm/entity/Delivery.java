package com.mantm.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
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
@Table(name="delivery")
public class Delivery extends AbstractEntity{
	
	@NotNull
	@Column(name="name", length = 100, unique = true)
	private String name;
	
	@Min(0)
	@NotNull
	@Column(name="price")
	private double price;
	
	@NotNull
	@Column(name="description", length = 1000)
	private String description;
	
	@Column(name="is_deleted")
	private boolean isDeleted = false;
	
	@OneToOne(mappedBy = "delivery")
	private Order order;
}
