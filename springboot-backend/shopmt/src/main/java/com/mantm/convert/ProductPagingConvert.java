package com.mantm.convert;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import com.mantm.dto.ProductDto;
import com.mantm.dto.response.ProductPaging;
import com.mantm.entity.Product;

@Component
public class ProductPagingConvert {

	@Autowired
	ProductConvert productConvert;

	public ProductPaging convertToDto(Page<Product> products) {
		ProductPaging response = new ProductPaging();
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
