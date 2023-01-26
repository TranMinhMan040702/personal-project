package com.mantm.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

import lombok.Data;

@Data
@ConfigurationProperties("storage")
public class StoragePropertise {
	private String location;
	
}
