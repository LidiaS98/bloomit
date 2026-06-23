package com.bloomit.bloomit.service;

import com.bloomit.bloomit.model.User;
import com.bloomit.bloomit.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;
    @Override
    public User createUser(User newUser) {
        return userRepository.save(newUser);
    }

    @Override
    public User findById(Long userId) {
        return userRepository.findById(userId).orElse(null);
    }
}
