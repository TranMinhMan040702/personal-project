package com.mantm.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
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
@Table(name = "user")
public class User extends AbstractEntity{
	
	@Column(name = "first_name", length = 32)
	@NotNull
	private String firstname;
	
	@Column(name="last_name", length = 32)
	@NotNull
	private String lastname;
	
	@Column(name="id_card", unique = true)
	private String idCard;
	
	@Column(name="email", unique = true)
	@NotNull
	private String email;
	
	@Column(name="phone", unique = true)
	private String phone;
	
	@Column(name="password")
	@NotNull
	private String password;
	
	@Column(name="role")
	private String role = "USER";
	
	@Column(name="avatar")
	private String avatar;
	
	@Column(name="e_wallet")
	@Min(0)
	private double eWallet = 0;
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private List<Order> orders;
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private List<Cart> carts;
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private List<Review> reviews;
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private List<UserFollowProduct> followProducts;
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private List<Transaction> transactions;
	
}
