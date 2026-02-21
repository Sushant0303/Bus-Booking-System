package com.project.busbooking.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.busbooking.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findByEmail(String email);
}
