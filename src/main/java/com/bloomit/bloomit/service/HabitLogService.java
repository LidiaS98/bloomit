package com.bloomit.bloomit.service;

import com.bloomit.bloomit.model.HabitLog;

import java.util.List;
import java.util.Optional;

public interface HabitLogService {
    HabitLog save(HabitLog habitLog);
    List<HabitLog> findAllByUser(Long userId);
    void deleteById(Long id);
    Optional<HabitLog> update(Long id, HabitLog habitLog);
}
