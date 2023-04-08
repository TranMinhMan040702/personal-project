package com.mantm.entity;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Max;
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
@Table(name = "product")
public class Product extends AbstractEntity {

	@Column(name = "name", length = 100)
	@NotNull
	private String name;

	@Column(name = "description", length = 1000)
	@NotNull
	private String description;

	@NotNull
	@Min(0)
	@Column(name = "price")
	private double price;

	@NotNull
	@Min(0)
	@Column(name = "promotional_price")
	private double promotionalPrice;

	@NotNull
	@Min(0)
	@Column(name = "quantity")
	private int quantity;

	@Min(0)
	@Column(name = "sold")
	private int sold = 0;

	@Min(0)
	@Max(5)
	@Column(name = "rating")
	private int rating = 3;

	@ManyToOne
	@JoinColumn(name = "category_id")
	private Category category;

	@OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
	private List<Image_Product> images;

	@OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
	private List<Review> reviews;

	@ManyToMany(mappedBy = "products", cascade = CascadeType.ALL)
	private Set<UserFollowProduct> followProducts;

	@OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<OrderItem> orderItems;

	@OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
	private List<CartItem> cartItems;

}
