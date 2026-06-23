package com.bloomit.bloomit.service;

import com.bloomit.bloomit.model.User;

public interface UserService {
    User createUser(User newUser);
    User findById(Long userId);
}

