package com.bloomit.bloomit.controller;

import com.bloomit.bloomit.model.User;
import com.bloomit.bloomit.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor

public class UserController {
    private final UserService userService;

    @PostMapping
    public User createUser(@RequestBody User user){
        return userService.createUser(user);
    }

    @GetMapping("/{userId}")
    public User findById(@PathVariable Long userId){
        return userService.findById(userId);
    }
}
