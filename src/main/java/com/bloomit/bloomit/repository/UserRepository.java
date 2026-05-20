package com.bloomit.bloomit.repository;

import com.bloomit.bloomit.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    //by extending JpaRepository I have methods like save(), findById(), findAll(), deleteById() for SQL
}
