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

    // JPA relation between User and HabitLog. Many "posts" its assigned to one person with user_id
    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;

    @Column
    double sleepHours;

    @Column
    int waterMl;

    @Column
    int steps;

    @Column @Enumerated(EnumType.STRING)
    Mood mood;

    @Column @Enumerated(EnumType.STRING)
    Energy energy;

    @Column(nullable = false, updatable = false)
    LocalDateTime createdAt;
}
