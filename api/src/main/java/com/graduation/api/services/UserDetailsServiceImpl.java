package com.graduation.api.services;

import com.graduation.api.dtos.UserDetailsImpl;
import com.graduation.api.entities.UserEntity;
import com.graduation.api.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepo userRepo;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity user = userRepo.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("User Not Found with email: " + username));
        return new UserDetailsImpl(user);
    }
}
