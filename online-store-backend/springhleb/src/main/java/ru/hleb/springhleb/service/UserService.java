package ru.hleb.springhleb.service;

import org.springframework.stereotype.Service;
import ru.hleb.springhleb.entity.User;

@Service
public interface UserService {
    public User getUser(Long id);
}