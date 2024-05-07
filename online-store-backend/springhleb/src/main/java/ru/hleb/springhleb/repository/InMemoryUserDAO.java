package ru.hleb.springhleb.repository;

import org.springframework.stereotype.Repository;
import ru.hleb.springhleb.model.User;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.IntStream;

@Repository
public class InMemoryUserDAO {
    private final List<User> USERS = new ArrayList<>();

    public List<User> findAllUsers() {
        return USERS;
    }
    public User createUser(User user) {
        USERS.add(user);
        return user;
    }

    public User getUser(String email) {
        return USERS.stream()
                .filter(element -> element.getEmail().equals(email))
                .findFirst()
                .orElse(null);
    }

    public User updateUserInfo(User user) {
        var userIndex = IntStream.range(0, USERS.size())
                .filter(index -> USERS.get(index).getEmail().equals(user.getEmail()))
                .findFirst()
                .orElse(-1);
        if (userIndex > -1) {
            USERS.set(userIndex, user);
            return user;
        }
        return null;
    }

    public void deleteUser(String email) {
     var user = getUser(email);
     if (user != null) {
         USERS.remove(user);
     }
    }
}
