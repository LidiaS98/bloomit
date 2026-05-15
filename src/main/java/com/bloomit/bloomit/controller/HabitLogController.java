package com.bloomit.bloomit.controller;

import com.bloomit.bloomit.model.HabitLog;
import com.bloomit.bloomit.service.HabitLogServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/habits")
@RequiredArgsConstructor
public class HabitLogController {
    private final HabitLogServiceImpl habitLogServiceImpl;

    @PostMapping
    public HabitLog addNewHabit(@RequestBody HabitLog habitLog){
        return habitLogServiceImpl.save(habitLog);
    }
}
