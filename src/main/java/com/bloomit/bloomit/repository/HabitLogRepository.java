package com.bloomit.bloomit.repository;

import com.bloomit.bloomit.model.HabitLog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HabitLogRepository extends JpaRepository <HabitLog, Long>{
    //by extending JpaRepository I have methods like save(), findById(), findAll(), deleteById() for SQL
    public List<HabitLog> findByUser_Id(Long userId);
}
