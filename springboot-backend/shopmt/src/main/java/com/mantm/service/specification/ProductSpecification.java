package com.mantm.service.specification;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.criteria.Expression;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;

import com.mantm.entity.Category;
import com.mantm.entity.Product;

public class ProductSpecification {

	public static Specification<Product> getSpecification(Long categoryId, String search,
			Double priceMin, Double priceMax) {
		return ((root, query, builder) -> {
			
			List<Predicate> predicates = new ArrayList<>();

			if (categoryId != null) {
				Root<Category> category = query.from(Category.class);
				Expression<Collection<Product>> categoryProduct = category.get("products");
				predicates.add(builder.and(builder.equal(category.get("id"), categoryId),
						builder.isMember(root, categoryProduct)));
			}

			if (search != null && !search.isEmpty())
				predicates.add(builder.like(root.get("name"), "%" + search + "%"));

			if (priceMin != null && priceMax != null)
				predicates.add(builder.between(root.get("promotionalPrice"), priceMin, priceMax));

			return builder.and(predicates.toArray(new Predicate[0]));
		});
	}

}
