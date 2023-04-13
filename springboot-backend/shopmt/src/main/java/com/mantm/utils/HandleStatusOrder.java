package com.mantm.utils;

import com.mantm.contains.Containt;
import com.mantm.entity.StatusOrderEnum;

public class HandleStatusOrder {
	public static StatusOrderEnum handleStatus(String status) {
		switch (status) {
		case Containt.NOT_PROCESSED:
			return StatusOrderEnum.NOT_PROCESSED;
		case Containt.PROCESSING:
			return StatusOrderEnum.PROCESSING;
		case Containt.SHIPPED:
			return StatusOrderEnum.SHIPPED;
		case Containt.DELIVERED:
			return StatusOrderEnum.DELIVERED;
		case Containt.CANCELLED:
			return StatusOrderEnum.CANCELLED;
		default:
			return StatusOrderEnum.NOT_PROCESSED;
		}
	}
}
