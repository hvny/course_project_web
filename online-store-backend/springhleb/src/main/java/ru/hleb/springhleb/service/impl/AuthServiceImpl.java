package ru.hleb.springhleb.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import ru.hleb.springhleb.entity.User;
import ru.hleb.springhleb.model.AuthenticationResponse;
import ru.hleb.springhleb.model.JwtTokenProvider;
import ru.hleb.springhleb.repository.UserRepository;
import ru.hleb.springhleb.service.AuthService;

@Service
@Primary
@AllArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final UserRepository userRepository;
    JwtTokenProvider jwtTokenProvider;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User signUp(String firstName, String phoneNumber, String password) {
        User existingUser = userRepository.findByPhoneNumber(phoneNumber);
        if (existingUser != null) {
            throw new RuntimeException("User with this phone number already exists");
        }

        User newUser = new User();
        newUser.setFirstName(firstName);
        newUser.setPhoneNumber(phoneNumber);
        newUser.setPassword(passwordEncoder.encode(password));

        User savedUser = userRepository.save(newUser);
        return savedUser;
    }

    public AuthenticationResponse signIn(String phoneNumber, String password) {
        User user = userRepository.findByPhoneNumber(phoneNumber);
        if (user == null) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Пользователь не зарегистрирован");
        }

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Неверный пароль");
        }

        String accessToken = jwtTokenProvider.generateAccessToken(user.getPhoneNumber());
        String refreshToken = jwtTokenProvider.generateRefreshToken(user.getPhoneNumber());

        return new AuthenticationResponse(accessToken, refreshToken);
    }

    public void signOut(String refreshToken) {
        userRepository.deleteRefreshToken(refreshToken);
    }
}
