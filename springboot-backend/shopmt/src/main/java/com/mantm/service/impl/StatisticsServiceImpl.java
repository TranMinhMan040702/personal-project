package com.mantm.service.impl;

import java.time.YearMonth;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

import com.mantm.entity.Order;
import com.mantm.repository.OrderRepository;
import com.mantm.repository.ProductRepository;
import com.mantm.repository.ReviewRepository;
import com.mantm.service.IStatisticsService;
import com.mantm.service.specification.OrderSpecification;

@Component
public class StatisticsServiceImpl implements IStatisticsService {

	@Autowired
	private OrderRepository orderRepository;
	@Autowired
	private ProductRepository productRepository;
	@Autowired
	private ReviewRepository reviewRepository;

	@Override
	public List<Double> statisticRevenue(int year) {
		List<Double> listRevenue = new ArrayList<>();

		for (int i = 0; i < 12; i++) {
			Specification<Order> specification = OrderSpecification
					.statisticSpecification(getStartDate(i, year), getEndDate(i, year));
			List<Order> orders = orderRepository.findAll(specification);
			listRevenue.add(calulatorRevenue(orders));
		}

		return listRevenue;
	}

	@Override
	public Map<Object, Object> getTotal() {
		Map<Object, Object> response = new HashMap<>();
		response.put("totalSales", totalSales());
		response.put("totalOrder", totalOrder());
		response.put("totalProduct", totalProduct());
		return response;
	}

	@Override
	public List<Long> statisticRating() {
		List<Long> listRating = new ArrayList<>();

		for (int i = 1; i <= 5; i++) {
			listRating.add(reviewRepository.countByRating(i));
		}

		return listRating;
	}

	private Double totalSales() {
		return calulatorRevenue(orderRepository.findAll());
	}

	private long totalOrder() {
		return orderRepository.count();
	}

	private long totalProduct() {
		return productRepository.count();
	}

	private Double calulatorRevenue(List<Order> orders) {
		Double result = 0.0;
		for (Order order : orders) {
			result += order.getAmountFromUser();
		}
		return result;
	}

	private Date getStartDate(int month, int year) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(new Date());
		calendar.set(Calendar.MONTH, month);
		calendar.set(Calendar.DAY_OF_MONTH, calendar.getActualMinimum(Calendar.DAY_OF_MONTH));
		calendar.set(Calendar.YEAR, year);
		return calendar.getTime();
	}

	private Date getEndDate(int month, int year) {
		YearMonth yearMonthObject = YearMonth.of(year, month + 1);
		int daysInMonth = yearMonthObject.lengthOfMonth();

		Calendar calendar = Calendar.getInstance();
		calendar.setTime(new Date());
		calendar.set(Calendar.MONTH, month);
		calendar.set(Calendar.DAY_OF_MONTH, daysInMonth);
		calendar.set(Calendar.YEAR, year);
		return calendar.getTime();
	}

}
