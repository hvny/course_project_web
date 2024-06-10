package ru.hleb.springhleb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import ru.hleb.springhleb.entity.User;

import java.util.Optional;
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findById(Long id);
    User findByPhoneNumber(String phoneNumber);

    @Modifying
    @Query("delete from User u where u.refreshToken = ?1")
    void deleteRefreshToken(String refreshToken);

}