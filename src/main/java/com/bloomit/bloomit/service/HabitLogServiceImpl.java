package com.bloomit.bloomit.service;

import com.bloomit.bloomit.model.HabitLog;
import com.bloomit.bloomit.repository.HabitLogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class HabitLogServiceImpl implements HabitLogService {
    private final HabitLogRepository habitLogRepository;

    public HabitLog save(HabitLog habitLog){
        return habitLogRepository.save(habitLog);
    }

    public List <HabitLog> findAllByUser(Long userId){
        return habitLogRepository.findByUser_Id(userId);
    }

    public void deleteById(Long id){
        habitLogRepository.deleteById(id);
    }
}
