package com.bloomit.bloomit.service;

import com.bloomit.bloomit.model.User;
import com.bloomit.bloomit.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)

public class UserServiceImplTest {
    @Mock
    private UserRepository userRepository;
    @Mock
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @InjectMocks
    private UserServiceImpl userService;

    @Test
    void findById() {
        //arrange
        Long userId = 1L;
        User expectedUser = new User();
        when(userRepository.findById(userId)).thenReturn(Optional.of(expectedUser));
        //act
        User result = userService.findById(userId);
        //assert
        verify(userRepository).findById(userId);
        assertEquals(expectedUser, result);
    }

    @Test
    void createUser() {
        //arrange
        User newUser = new User();
        when(userRepository.save(newUser)).thenReturn(newUser);
        //act
        User resultUser = userService.createUser(newUser);
        //assert
        verify(userRepository).save(newUser);
        assertEquals(newUser, resultUser);
    }
}
