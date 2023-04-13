package com.mantm.service.specification;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.Predicate;

import org.springframework.data.jpa.domain.Specification;

import com.mantm.entity.Order;
import com.mantm.utils.HandleStatusOrder;

public class OrderSpecification {

	public static Specification<Order> getSpecification(String status, String search) {
		return ((root, query, builder) -> {
			List<Predicate> predicates = new ArrayList<>();

			if (status != null && !status.isEmpty())
				predicates.add(builder.equal(root.get("status"), HandleStatusOrder.handleStatus(status)));

			if (search != null && !search.isEmpty()) {
				predicates.add(builder.or(builder.like(root.get("phone"), "%" + search + "%"),
						builder.like(root.get("address"), "%" + search + "%")));
			}

			return builder.and(predicates.toArray(new Predicate[0]));

		});
	}

}
