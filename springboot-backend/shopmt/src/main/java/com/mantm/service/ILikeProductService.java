package com.mantm.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.mantm.dto.LikeProductDto;

@Component
public interface ILikeProductService {

	LikeProductDto likeProduct(long userId, long productId);

	LikeProductDto findLikeProductByUser(long userId);

	LikeProductDto unLikeProduct(long userId, long productId);

	List<LikeProductDto> findAllLikeProduct();

}
