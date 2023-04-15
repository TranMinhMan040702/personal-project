package com.mantm.convert;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import com.mantm.dto.ProductDto;
import com.mantm.dto.response.ProductResponse;
import com.mantm.entity.Product;

@Component
public class ProductResponseConvert {

	@Autowired
	ProductConvert productConvert;

	public ProductResponse convertToDto(Page<Product> products) {
		ProductResponse response = new ProductResponse();
		List<ProductDto> productDtots = new ArrayList<>();

		response.setPage(products.getPageable().getPageNumber());
		response.setLimit(products.getPageable().getPageSize());
		response.setTotalPage(products.getTotalPages());

		for (Product product : products) {
			productDtots.add(productConvert.converToDto(product));
		}
		response.setProducts(productDtots);
		return response;
	}
}
