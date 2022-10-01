package com.graduation.api.controllers;

import com.graduation.api.dtos.Credentials;
import com.graduation.api.dtos.AuthResponse;
import com.graduation.api.dtos.NewUserData;
import com.graduation.api.dtos.UserDetailsImpl;
import com.graduation.api.services.UserService;
import com.graduation.api.utils.JwtProperties;
import com.graduation.api.utils.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody Credentials credentials){
        return ResponseEntity.ok(userService.signIn(credentials.getEmail(), credentials.getPassword()));
    }

    @PostMapping("/signup")
    public ResponseEntity<Object> signup(@RequestBody NewUserData userData){
        return ResponseEntity.ok(userService.signup(userData));
    }
}
