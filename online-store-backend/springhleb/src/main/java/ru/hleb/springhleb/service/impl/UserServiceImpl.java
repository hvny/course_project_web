package ru.hleb.springhleb.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import ru.hleb.springhleb.entity.User;
import ru.hleb.springhleb.exception.AppException;
import ru.hleb.springhleb.exception.UserNotFoundException ;
import ru.hleb.springhleb.model.JwtTokenProvider;
import ru.hleb.springhleb.repository.UserRepository;
import ru.hleb.springhleb.service.UserService;

@Service
@Primary
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    private JwtTokenProvider jwtTokenProvider;


    public User getUser(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException("Пользователь не найден"));
    }
}
