package com.mantm.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.mantm.dto.DeliveryDto;
import com.mantm.exception.ResourceNotFoundException;

@Service
public interface DeliveryService {
	DeliveryDto save(DeliveryDto deliveryDto) throws Exception;

	DeliveryDto findDeliveryById(long id);

	List<DeliveryDto> findAll();

	Map<String, String> deleteDelivery(List<String>  ids);

	Map<String, String> deleteSoftDelivery(long[] ids) throws ResourceNotFoundException;
}
