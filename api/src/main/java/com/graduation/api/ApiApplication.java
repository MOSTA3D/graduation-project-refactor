package com.graduation.api;

import com.graduation.api.entities.RoleEntity;
import com.graduation.api.entities.UserEntity;
import com.graduation.api.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class ApiApplication {

	@Autowired
	private UserRepo userRepo;

	@Autowired
	private PasswordEncoder passwordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
		System.out.println("SERVER INIT...");
	}

	@Transactional
	private void makeQuery(UserRepo userRepository){
		List<RoleEntity> roles = new ArrayList<>();
		roles.add(new RoleEntity("ROLE_ADMIN"));

		UserEntity user = new UserEntity("mostafa", "mostafa@gmail.com", passwordEncoder.encode("password"));
		user.setRoles(roles);

		userRepository.save(user);
	}

	@Bean
	CommandLineRunner run(UserRepo userRepository){
		return args->{
			makeQuery(userRepository);
		};
	}

}
