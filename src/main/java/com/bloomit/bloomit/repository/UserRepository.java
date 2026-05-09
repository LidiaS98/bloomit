package com.bloomit.bloomit.repository;

import com.bloomit.bloomit.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface UserRepository extends JpaRepository<User,Long> {

}
