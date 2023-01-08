package com.mantm.entity;



import java.util.Date;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import lombok.Data;

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
@Data
public abstract class AbstractEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="created_by")
	@CreatedBy
	private String createdBy;
	
	@Column(name="updated_by")
	@LastModifiedBy
	private String updatedBy;
	
	@Column(name="create_at")
	@CreatedDate
	private Date createdAt;
	
	@Column(name="update_at")
	@LastModifiedDate
	private Date updatedAt;
}
