package ru.hleb.springhleb.repository;

import org.springframework.stereotype.Repository;
import ru.hleb.springhleb.entity.User;

import java.util.ArrayList;
import java.util.List;

@Repository
public class InMemoryUserDAO {
    private final List<User> USERS = new ArrayList<>();

    public User saveUser(User user) {
        USERS.add(user);
        return user;
    }

    public User findByEmail(String email) {
        return USERS.stream()
                .filter(element -> element.getEmail().equals(email))
                .findFirst()
                .orElse(null);
    }
}
