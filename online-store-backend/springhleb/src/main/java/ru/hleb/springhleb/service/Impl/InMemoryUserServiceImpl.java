package ru.hleb.springhleb.service.Impl;

import org.springframework.stereotype.Service;
import ru.hleb.springhleb.model.User;
import ru.hleb.springhleb.service.UserService;

import java.util.List;

@Service
public class InMemoryUserServiceImpl implements UserService {
    @Override
    public List<User> findAllUsers() {
        /*return List.of(
                User.builder().firstName("Олег").email("test@test.ru").phoneNumber("3223").build()
        );*/
        return null;
    }

    @Override
    public User createUser(User user) {
        return null;
    }

    @Override
    public User getuser(String email) {
        return null;
    }

    @Override
    public User updateUserInfo(User user) {
        return null;
    }

    @Override
    public void deleteUser(String email) {

    }


}
