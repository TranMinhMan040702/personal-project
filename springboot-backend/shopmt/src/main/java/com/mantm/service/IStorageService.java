package com.mantm.service;

import java.nio.file.Path;

import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public interface IStorageService {

	void init();

	void delete(String storeFilename) throws Exception;

	Path load(String filename);

	Resource loadAsResource(String filename);

	void store(MultipartFile file, String storeFileName);

	String getStorageFileName(MultipartFile file, String id);

}
