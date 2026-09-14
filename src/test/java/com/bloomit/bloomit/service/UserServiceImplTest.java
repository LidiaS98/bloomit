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
import static org.junit.jupiter.api.Assertions.assertNull;
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

    @Test
    void loginSuccess() {
        //arrange
        String email = "test@test.com";
        String password = "test123";
        User expectedUser = new User();
        expectedUser.setPassword("hashedPassword");
        when(userRepository.findByEmail(email))
                .thenReturn(Optional.of(expectedUser));
        when(bCryptPasswordEncoder.matches(password, "hashedPassword"))
                .thenReturn(true);
        //act
        User result = userService.login(email, password);
        //assert
        assertEquals(expectedUser, result);
        when(userRepository.findByEmail(email)).thenReturn(Optional.empty());
    }

    @Test
    void loginUserNotFound() {
        // arrange
        String email = "notexist@test.com";
        String password = "test123";

        when(userRepository.findByEmail(email))
                .thenReturn(Optional.empty());
        // act
        User result = userService.login(email, password);
        // assert
        assertNull(result);
    }

    @Test
    void loginWrongPassword() {
        // arrange
        String email = "test@test.com";
        String password = "wrongPassword";
        User newUser = new User();
        newUser.setPassword("hashedPassword");

        //user exists
        when(userRepository.findByEmail(email))
                .thenReturn(Optional.of(newUser));
        // but the password is not matching
        when(bCryptPasswordEncoder.matches(password, "hashedPassword"))
                .thenReturn(false);
        // act
        User result = userService.login(email, password);
        // assert
        assertNull(result);
    }
}
