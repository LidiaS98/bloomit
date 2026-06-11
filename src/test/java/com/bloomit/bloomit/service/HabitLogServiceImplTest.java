package com.bloomit.bloomit.service;

import com.bloomit.bloomit.repository.HabitLogRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)

class HabitLogServiceImplTest {
    @Mock
    private HabitLogRepository habitLogRepository;

    @InjectMocks
    private HabitLogServiceImpl habitLogService;

    @Test
    void save() {
    }

    @Test
    void findAllByUser() {
    }

    @Test
    void deleteById() {
        // arrange
        Long id = 1L;
        // act
        habitLogService.deleteById(id);
        // assert
        verify(habitLogRepository).deleteById(id);

    }
}