package com.mantm.service.specification;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.Predicate;

import org.springframework.data.jpa.domain.Specification;

import com.mantm.entity.User;

public class UserSpecification {
	public static Specification<User> getSpecification(String search) {
		return ((root, query, builder) -> {
			List<Predicate> predicates = new ArrayList<>();

			if (search != null && !search.isEmpty()) {
				predicates.add(builder.or(builder.like(root.get("firstname"), "%" + search + "%"),
						builder.like(root.get("lastname"), "%" + search + "%"),
						builder.like(root.get("email"), "%" + search + "%")));
			}

			return builder.and(predicates.toArray(new Predicate[0]));

		});
	}
}
