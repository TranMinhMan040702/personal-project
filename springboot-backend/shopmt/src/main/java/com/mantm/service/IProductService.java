package com.mantm.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.mantm.dto.ProductDto;
import com.mantm.exception.ResourceNotFoundException;

@Service
public interface IProductService {

	ProductDto save(ProductDto productRequest, MultipartFile[] files) throws ResourceNotFoundException, Exception;

	List<ProductDto> findAll();

	Map<String, String> deleteProduct(long id) throws ResourceNotFoundException, Exception;

	ProductDto findProductById(long id) throws ResourceNotFoundException;

}
