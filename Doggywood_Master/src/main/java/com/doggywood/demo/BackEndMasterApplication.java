package com.doggywood.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("com.doggywood.repositories")
@ComponentScan("com.doggywood")
@EntityScan("com.doggywood.entities")
public class BackEndMasterApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackEndMasterApplication.class, args);
	}

}
