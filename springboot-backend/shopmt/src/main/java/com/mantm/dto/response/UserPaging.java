package com.mantm.dto.response;

import java.util.List;

import com.mantm.dto.UserDto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserPaging {
	private Integer page;
	private Integer limit;
	private Integer totalPage;
	private List<UserDto> users;
}
