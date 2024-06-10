package ru.hleb.springhleb.service;

import org.springframework.stereotype.Service;
import ru.hleb.springhleb.entity.User;
import ru.hleb.springhleb.model.AuthenticationResponse;

@Service
public interface AuthService {
    User signUp(String firstName, String phoneNumber, String password);
    AuthenticationResponse signIn(String phoneNumber, String password);

    void signOut(String refreshToken);
}
