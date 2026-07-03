package com.bloomit.bloomit.controller;

import com.bloomit.bloomit.dto.LoginRequest;
import com.bloomit.bloomit.model.User;
import com.bloomit.bloomit.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor


public class AuthController {

    private final UserService userService;

    @PostMapping
    public User login(@RequestBody LoginRequest request) {return userService.login(request.getEmail(), request.getPassword());}
}
