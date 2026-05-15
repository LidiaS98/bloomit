package com.bloomit.bloomit.service;

import com.bloomit.bloomit.model.HabitLog;

import java.util.List;

public interface HabitLogService {
    HabitLog save(HabitLog habitLog);
    List<HabitLog> findAllByUser();
    void deleteById(Long id);
}
