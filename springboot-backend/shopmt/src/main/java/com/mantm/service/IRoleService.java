package com.mantm.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.mantm.dto.RoleDto;
import com.mantm.exception.ResourceNotFoundException;

@Service
public interface IRoleService {

	Map<String, String> deleteRole(List<String> ids) throws ResourceNotFoundException;

	RoleDto save(RoleDto dto);

	List<RoleDto> findAllRole();

}
