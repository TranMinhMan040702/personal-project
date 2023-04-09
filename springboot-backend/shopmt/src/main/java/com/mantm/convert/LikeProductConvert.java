package com.mantm.convert;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.dto.LikeProductDto;
import com.mantm.dto.ProductDto;
import com.mantm.entity.Product;
import com.mantm.entity.User;

@Component
public class LikeProductConvert {

	@Autowired
	ProductConvert productConvert;
	@Autowired
	UserLikeProductConvert userLikeProductConvert;

	public LikeProductDto convertToDto(Set<Product> products, User user, boolean exist) {
		LikeProductDto dto = new LikeProductDto();
		List<ProductDto> productDtos = new ArrayList<>();
		for (Product product : products) {
			productDtos.add(productConvert.converToDto(product));
		}
		dto.setUser(userLikeProductConvert.convertToDto(user));
		dto.setProducts(productDtos);
		dto.setExist(exist);
		return dto;
	}
}
