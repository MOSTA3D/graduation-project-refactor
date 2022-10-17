package com.graduation.api;

import com.graduation.api.entities.*;
import com.graduation.api.repositories.AreaRepo;
import com.graduation.api.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@SpringBootApplication
public class ApiApplication {

	@Autowired
	private UserRepo userRepo;

	@Autowired
	private AreaRepo areaRepo;

	@Autowired
	private PasswordEncoder passwordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
		System.out.println("SERVER INIT...");
	}

	@Transactional
	private void makeQuery(UserRepo userRepository){
		List<RoleEntity> roles = new ArrayList<>();
		roles.add(new RoleEntity(EnumRole.ROLE_ADMIN));
		roles.add(new RoleEntity(EnumRole.ROLE_USER));

		UserEntity user = new UserEntity("mostafa", "mostafa@gmail.com", passwordEncoder.encode("password"));
		user.setRoles(roles);

		userRepository.save(user);
	}

	@Bean
	CommandLineRunner run(UserRepo userRepository){
//		CameraEntity camera = new CameraEntity("some url");
		return args->{
			makeQuery(userRepository);

			String[] urls = new String[5];
			for(int i = 0; i < 5;i++){
				urls[i] = "http://techslides.com/demos/sample-videos/small.mp4";
			}

			CameraEntity myCamera = new CameraEntity("http://techslides.com/demos/sample-videos/small.mp4");

			AreaEntity myArea = new AreaEntity("Metro", "https://img.traveltriangle.com/blog/wp-content/uploads/2014/11/cover-for-Places-To-Visit-In-August-In-The-World.jpg", "somewhere", null);

			List<CameraEntity> cameras = Arrays.stream(urls).map(url-> {
				CameraEntity camera = new CameraEntity(url);
				camera.setArea(myArea);
				return camera;
			}).collect(Collectors.toList());
			myArea.setCameras(cameras);

			myCamera.setArea(myArea);

			List<AreaEntity> areas = new ArrayList<>();
			areas.add(myArea);
			areas.add(new AreaEntity("Central Park", "https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/Taj-Mahal-Agra-feature.jpg", "somewhere", cameras));
			areas.add(new AreaEntity("Stadium", "https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-paris-france.jpg", "somewhere", cameras));
			areas.add(new AreaEntity("Miri Hospital", "https://images.thrillophilia.com/image/upload/s--sJalCT2---/c_fill,g_center,h_642,q_auto,w_1280/f_auto,fl_strip_profile/v1/images/photos/000/124/827/original/1620711872_shutterstock_1396013432.jpg.jpg", "somewhere", null));
			areaRepo.saveAll(areas);
		};
	}

}
