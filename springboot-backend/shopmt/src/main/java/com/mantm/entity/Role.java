package com.mantm.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;
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
@Table(name = "role")
public class Role extends AbstractEntity {

	public Role(String name) {
		super();
		this.name = name;
	}

	@Column(name = "name")
	private String name;

	@ManyToMany(mappedBy = "roles", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private List<User> users;

}
