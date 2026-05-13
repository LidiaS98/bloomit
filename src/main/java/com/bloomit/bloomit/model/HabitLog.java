package com.bloomit.bloomit.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name="habit_log")
public class HabitLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(nullable = false)
    int sleepHours;

    @Column(nullable = false)
    int waterMl;

    @Column(nullable = false)
    int steps;

    @Column(nullable = false)
    int mood;

    @Column(nullable = false)
    int energy;

    @Column(nullable = false, updatable = false)
    LocalDateTime createdAt;
}
