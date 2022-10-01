package com.graduation.api.services;

import com.graduation.api.dtos.AuthResponse;
import com.graduation.api.dtos.NewUserData;
import com.graduation.api.dtos.UserDetailsImpl;
import com.graduation.api.entities.EnumRole;
import com.graduation.api.entities.RoleEntity;
import com.graduation.api.entities.UserEntity;
import com.graduation.api.exceptions.AppException;
import com.graduation.api.repositories.RoleRepo;
import com.graduation.api.repositories.UserRepo;
import com.graduation.api.utils.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private RoleRepo roleRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtUtils jwtUtils;
    @Autowired
    private AuthenticationManager authenticationManager;

    public AuthResponse signIn(String email, String password){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwtToken = jwtUtils.createToken(authentication);

        System.out.println("the principal is " + authentication.getPrincipal());

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        List<String> roles = userDetails.getAuthorities().stream().map(GrantedAuthority::getAuthority).toList();

        return new AuthResponse(userDetails.getUsername(), jwtToken, roles);
    }

    public AuthResponse signup(NewUserData userData){
        // to-do user data validation

        createUser(userData);
        return signIn(userData.getEmail(), userData.getPassword());
    }

    public void createUser(NewUserData userData){
        String hashedPassword = passwordEncoder.encode(userData.getPassword());
        UserEntity user = new UserEntity(userData.getFirstname() + " " + userData.getLastname(), userData.getEmail(), hashedPassword);
        assignRoleToUser(EnumRole.ROLE_USER, user);
        userRepo.save(user);
    }

    public void assignRoleToUser(EnumRole roleName, UserEntity user){
        RoleEntity roleReturned = roleRepo.findByName(roleName).orElseThrow(()->new AppException("Something went wrong"));
        user.getRoles().add(roleReturned);
    }
}
