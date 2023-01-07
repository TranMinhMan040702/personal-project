package com.mantm.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

@Configuration
public class CloudinaryConfig {
	
	@Bean
	public Cloudinary cloudinary() {
		Cloudinary cloudinary = new Cloudinary(ObjectUtils.asMap(
				"cloud_name", "dwoejm4g6", 
				"api_key", "531723158945791",
				"api_secret", "vgCHOLFDpPoPe_DXyjk653ztW1k",
				"secure", true));
		return cloudinary;
	}
	 
}
