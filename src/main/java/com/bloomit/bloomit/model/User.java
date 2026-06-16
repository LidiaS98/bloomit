package com.bloomit.bloomit.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name="users")
public class User {
    // Identity means that PostgreSQL gives by default ids: 1,2,3...
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(nullable = false, unique = true, length = 254)
    String email;

    @Column(nullable = false)
    String password;

    @Column(nullable = false, updatable = false)
    @CreationTimestamp
    LocalDateTime createdAt;
}


