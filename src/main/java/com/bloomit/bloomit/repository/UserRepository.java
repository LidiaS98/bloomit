package com.bloomit.bloomit.repository;

import com.bloomit.bloomit.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    //by extending JpaRepository I have methods like save(), findById(), findAll(), deleteById() for SQL
    Optional<User> findByEmail(String email);
}
