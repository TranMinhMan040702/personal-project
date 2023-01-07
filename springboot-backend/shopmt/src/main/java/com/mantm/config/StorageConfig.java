package com.mantm.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import com.mantm.service.StorageService;



@Configuration
@EnableConfigurationProperties(StorageProperties.class)
public class StorageConfig {
	@Bean
	CommandLineRunner init(StorageService storageService) {
		return (args -> {
			storageService.init();
		});
	}

	@Bean
	public CommonsMultipartResolver multipartResolver() {
		CommonsMultipartResolver resolver = new CommonsMultipartResolver();
		resolver.setDefaultEncoding("UTF-8");
		return resolver;
	}
}
