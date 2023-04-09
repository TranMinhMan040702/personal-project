package com.mantm.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mantm.convert.LikeProductConvert;
import com.mantm.dto.LikeProductDto;
import com.mantm.entity.Product;
import com.mantm.entity.User;
import com.mantm.repository.ProductRepository;
import com.mantm.repository.UserRepository;
import com.mantm.service.ILikeProductService;

@Component
@Transactional
public class LikeProductServiceImpl implements ILikeProductService {

	@Autowired
	UserRepository userRepository;
	@Autowired
	ProductRepository productRepository;
	@Autowired
	LikeProductConvert likeProductConvert;

	@Override
	public LikeProductDto likeProduct(long userId, long productId) {
		Optional<User> user = userRepository.findById(userId);
		Optional<Product> product = productRepository.findById(productId);
		Set<Product> likeProducts = user.get().getProducts();
		Boolean exist = false;

		for (Product productOld : likeProducts) {
			if (product.get().getId() == productOld.getId()) {
				exist = true;
				return likeProductConvert.convertToDto(likeProducts, user.get(), exist);
			}
		}
		likeProducts.add(product.get());
		user.get().setProducts(likeProducts);
		userRepository.save(user.get());
		return likeProductConvert.convertToDto(likeProducts, user.get(), exist);
	}

	@Override
	public LikeProductDto unLikeProduct(long userId, long productId) {
		Optional<User> user = userRepository.findById(userId);
		Set<Product> likeProducts = user.get().getProducts();
		for (Product product : likeProducts) {
			if (product.getId() == productId) {
				likeProducts.remove(product);
				user.get().setProducts(likeProducts);
				userRepository.save(user.get());
				break;
			}
		}
		return likeProductConvert.convertToDto(likeProducts, user.get(), false);
	}

	@Override
	public List<LikeProductDto> findAllLikeProduct() {
		List<User> users = userRepository.findAll();
		List<LikeProductDto> likeProductDtos = new ArrayList<>();
		for (User user : users) {
			if (!user.getProducts().isEmpty()) {
				likeProductDtos.add(likeProductConvert.convertToDto(user.getProducts(), user, false));
			}
		}
		return likeProductDtos;
	}

	@Override
	public LikeProductDto findLikeProductByUser(long userId) {
		Optional<User> user = userRepository.findById(userId);
		Set<Product> likeProducts = user.get().getProducts();
		return likeProductConvert.convertToDto(likeProducts, user.get(), false);
	}

}
