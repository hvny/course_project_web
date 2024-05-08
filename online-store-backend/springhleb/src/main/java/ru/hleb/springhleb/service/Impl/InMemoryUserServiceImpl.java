package ru.hleb.springhleb.service.Impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ru.hleb.springhleb.model.User;
import ru.hleb.springhleb.repository.InMemoryUserDAO;
import ru.hleb.springhleb.service.UserService;

import java.util.List;

@Service
@AllArgsConstructor
public class InMemoryUserServiceImpl implements UserService {
    private final InMemoryUserDAO repository;
    @Override
    public List<User> findAllUsers() {
        return repository.findAllUsers();
    }

    @Override
    public User createUser(User user) {
        return repository.createUser(user);
    }

    @Override
    public User getUser(String email) {
        return repository.getUser(email);
    }

    @Override
    public User updateUserInfo(User user) {
        return repository.updateUserInfo(user);
    }

    @Override
    public void deleteUser(String email) {
        repository.deleteUser(email);
    }


}
