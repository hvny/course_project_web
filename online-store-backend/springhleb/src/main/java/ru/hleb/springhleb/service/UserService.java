package ru.hleb.springhleb.service;

import org.springframework.stereotype.Service;
import ru.hleb.springhleb.model.User;

import java.util.List;

@Service
public interface UserService {
    List<User> findAllUsers();
    User createUser(User user);
    User getUser(String email);
    User updateUserInfo(User user);
    void deleteUser(String email);
}
