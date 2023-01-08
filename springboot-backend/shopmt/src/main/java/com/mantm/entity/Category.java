package com.mantm.entity;

import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import lombok.*;

@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="category")
public class Category extends AbstractEntity{

	@Column(name="name", unique = true, length = 32)
	@NotNull
	private String name;
	
	@Column(name="is_deleted")
	private boolean isDeleted = false;
	
	@OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
	private List<Product> products;
	
}
