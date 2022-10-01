package com.graduation.api.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class NewUserData {
    private String firstname;
    private String lastname;
    private String email;
    private String password;
}
