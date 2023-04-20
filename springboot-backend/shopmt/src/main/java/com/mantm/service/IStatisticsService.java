package com.mantm.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public interface IStatisticsService {

	List<Double> statisticRevenue(int year);

	Map<Object, Object> getTotal();

	List<Long> statisticRating();

}
