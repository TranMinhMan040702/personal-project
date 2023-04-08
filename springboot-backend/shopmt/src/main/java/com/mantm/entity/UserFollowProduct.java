package com.mantm.entity;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
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
@Table(name = "user_follow_product")
public class UserFollowProduct extends AbstractEntity {

	@OneToOne(mappedBy = "followProduct")
	private User user;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "follow_product", joinColumns = @JoinColumn(name = "follow_id"), inverseJoinColumns = @JoinColumn(name = "product_id"))
	private Set<Product> products;
}
