package com.mantm.convert;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import com.mantm.dto.UserDto;
import com.mantm.dto.response.UserPaging;
import com.mantm.entity.User;

@Component
public class UserPagingConvert {

	@Autowired
	UserConvert userConvert;

	public UserPaging convertToDto(Page<User> users) {
		UserPaging response = new UserPaging();
		List<UserDto> userDtos = new ArrayList<>();

		response.setPage(users.getPageable().getPageNumber());
		response.setLimit(users.getPageable().getPageSize());
		response.setTotalPage(users.getTotalPages());

		for (User user : users) {
			userDtos.add(userConvert.convertToDto(user));
		}
		response.setUsers(userDtos);
		return response;
	}
}
