package com.mantm.convert;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import com.mantm.dto.DeliveryDto;
import com.mantm.entity.Delivery;
import com.mantm.exception.ResourceNotFoundException;

@Component
public class DeliveryConvert {
	
	public DeliveryDto convertToDto(Delivery delivery) {
		DeliveryDto dto = new DeliveryDto();
		BeanUtils.copyProperties(delivery, dto);		
		return dto;
	}
	
	public Delivery convertToEntity(DeliveryDto deliveryDto) throws ResourceNotFoundException {
		Delivery entity = new Delivery();
		BeanUtils.copyProperties(deliveryDto, entity);
		return entity;
	}
}
