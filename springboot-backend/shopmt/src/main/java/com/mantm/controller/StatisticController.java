package com.mantm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mantm.service.IStatisticsService;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class StatisticController {
	
	@Autowired
	IStatisticsService statisticsService;
	
	@GetMapping("admin/statistic/chartSales")
	public ResponseEntity<?> statisticRevenue(@RequestParam int year) {
		return ResponseEntity.ok(statisticsService.statisticRevenue(year));
	}
	
	@GetMapping("admin/statistic/total")
	public ResponseEntity<?> getTotal() {
		return ResponseEntity.ok(statisticsService.getTotal());
	}
	
	@GetMapping("admin/statistic/chartRating") 
	public ResponseEntity<?> statisticRating() {
		return ResponseEntity.ok(statisticsService.statisticRating());
	}
}
