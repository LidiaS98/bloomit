package com.bloomit.bloomit.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor


public class User {
    Long userID;
    String email;
    String password;
    LocalDateTime createdAt;
}


