//package com.mantm.config;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.context.event.ApplicationReadyEvent;
//import org.springframework.context.event.EventListener;
//import org.springframework.stereotype.Component;
//
//import com.mantm.entity.Role;
//import com.mantm.repository.RoleRepository;
//
//@Component
//public class InitialDataConfig {
//	@Autowired RoleRepository roleRepository;
//	
//	@EventListener
//	public void applyReady(ApplicationReadyEvent readyEvent) {
//		roleRepository.save(new Role("ADMIN"));
//		roleRepository.save(new Role("USER"));
//	}
//}
