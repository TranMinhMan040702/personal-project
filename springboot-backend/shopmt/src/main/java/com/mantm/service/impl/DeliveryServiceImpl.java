package com.mantm.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.dto.DeliveryDto;
import com.mantm.entity.Delivery;
import com.mantm.exception.ResourceNotFoundException;
import com.mantm.repository.DeliveryRepository;
import com.mantm.service.IDeliveryService;

@Component
public class DeliveryServiceImpl implements IDeliveryService{

	@Autowired
	ModelMapper mapper;
	
	@Autowired
	DeliveryRepository deliveryRepository;
	
	@Override
	public DeliveryDto save(DeliveryDto deliveryDto) {
		Delivery entity = new Delivery();
		if (deliveryDto.getId() != null) {
			Optional<Delivery> oldDelivery = deliveryRepository.findById(deliveryDto.getId());
			BeanUtils.copyProperties(oldDelivery.get(), entity);
			BeanUtils.copyProperties(deliveryDto, entity, "createdAt", "createdBy");
		} else {
			BeanUtils.copyProperties(deliveryDto, entity);
		}
		entity = deliveryRepository.save(entity);
		return mapper.map(entity, DeliveryDto.class);
	}

	@Override
	public DeliveryDto findDeliveryById(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<DeliveryDto> findAll() {
		
		List<DeliveryDto> results = new ArrayList<>();
		List<Delivery> entitise = deliveryRepository.findAll();
		
		for (Delivery delivery : entitise) {
			DeliveryDto deliveryDto = mapper.map(delivery, DeliveryDto.class);
			results.add(deliveryDto);
		}
		return results;
	}

	@Override
	public Map<String, String> deleteDelivery(List<String> ids) {
		Map<String, String> resp = new HashMap<>();
		for (String item : ids) {
			deliveryRepository.deleteById(Long.parseLong(item));
		}
		resp.put("delete", "Success");
		return resp;
	}

	@Override
	public Map<String, String> deleteSoftDelivery(long[] ids) throws ResourceNotFoundException {
		// TODO Auto-generated method stub
		return null;
	}

}
