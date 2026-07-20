package com.bloomit.bloomit.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

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
    @DecimalMin("0.0") @DecimalMax("24.0")
    double sleepHours;

    @Column
    @Min(0) @Max(10000)
    int waterMl;

    @Column
    @Min(0) @Max(100000)
    int steps;

    @Column @Enumerated(EnumType.STRING)
    Mood mood;

    @Column @Enumerated(EnumType.STRING)
    Energy energy;

    @Column(nullable = false, updatable = false)
    @CreationTimestamp
    LocalDateTime createdAt;
}
