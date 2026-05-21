package com.bloomit.bloomit.controller;

import com.bloomit.bloomit.model.HabitLog;
import com.bloomit.bloomit.service.HabitLogService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/habits")
@RequiredArgsConstructor
public class HabitLogController {
    private final HabitLogService habitLogService;

    @PostMapping
    public HabitLog addNewHabit(@RequestBody HabitLog habitLog){
        return habitLogService.save(habitLog);
    }

    @GetMapping("/{userId}")
    public List<HabitLog> getHabitLog(@PathVariable Long userId){
        return habitLogService.findAllByUser(userId);
    }

    @DeleteMapping("/{id}")
    void deleteHabitLog(@PathVariable Long id){
        habitLogService.deleteById(id);
    }
}
