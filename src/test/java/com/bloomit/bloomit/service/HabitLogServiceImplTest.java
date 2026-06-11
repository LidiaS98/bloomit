package com.bloomit.bloomit.service;

import com.bloomit.bloomit.model.HabitLog;
import com.bloomit.bloomit.repository.HabitLogRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)

class HabitLogServiceImplTest {
    @Mock
    private HabitLogRepository habitLogRepository;

    @InjectMocks
    private HabitLogServiceImpl habitLogService;

    @Test
    void save() {
        // arrange
        HabitLog habitLog = new HabitLog();
        when(habitLogRepository.save(habitLog)).thenReturn(habitLog);
        // act
        HabitLog resultSave = habitLogService.save(habitLog);
        // assert
        verify(habitLogRepository).save(habitLog);
        assertEquals(habitLog, resultSave);
    }

    @Test
    void findAllByUser() {
        // arrange
        Long userId = 1L;
        List<HabitLog> expectedLogs = new ArrayList<>();
        when(habitLogRepository.findByUser_Id(userId)).thenReturn(expectedLogs);
        // act
        List<HabitLog> resultFindAllByUser = habitLogService.findAllByUser(userId);
        // assert
        assertEquals(expectedLogs, resultFindAllByUser);
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