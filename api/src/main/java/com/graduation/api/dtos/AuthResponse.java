package com.graduation.api.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class AuthResponse {
    private String email;
    private String token;
    private List<String> roles;
}
