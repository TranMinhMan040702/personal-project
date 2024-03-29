package com.mantm.config;

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import com.mantm.service.IStorageService;

@Configuration
@EnableConfigurationProperties(StoragePropertise.class)
public class StorageConfig {
	
	@Bean
	public CommonsMultipartResolver commonsMultipartResolver() {
		CommonsMultipartResolver resolver = new CommonsMultipartResolver();
		resolver.setDefaultEncoding("UTF-8");
		return resolver;
	}
 
}
