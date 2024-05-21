package ru.hleb.springhleb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.hleb.springhleb.entity.User;

import java.util.Optional;
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findById(Long id);
}