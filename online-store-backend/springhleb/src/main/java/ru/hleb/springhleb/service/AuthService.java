package ru.hleb.springhleb.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.token.TokenService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import ru.hleb.springhleb.dto.request.SignUpDto;
import ru.hleb.springhleb.dto.response.UserDto;
import ru.hleb.springhleb.entity.User;

@Service
@RequiredArgsConstructor
public interface AuthService {
    private final PasswordEncoder passwordEncoder;
    private final JwtAuthenticationService jwtAuthenticationService;
    private final AuthenticationManager authenticationManager;

    private final TokenService tokenService;
    private final UserService userService;

    private final UserMapper userMapper;

    public UserDto signUp(SignUpDto request) {
        User user = User.builder()
                .phoneNumber(request.getPhoneNumber())
                .password(passwordEncoder.encode(request.getPassword()))
                .firstName(request.getFirstName())
                .build();

        return userMapper.toDto(userService.saveUser(user));
    }

}
