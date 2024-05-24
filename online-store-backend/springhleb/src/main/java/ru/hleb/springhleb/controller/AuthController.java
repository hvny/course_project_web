package ru.hleb.springhleb.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.hleb.springhleb.dto.request.SignUpDto;
import ru.hleb.springhleb.dto.response.UserDto;
import ru.hleb.springhleb.entity.User;
import ru.hleb.springhleb.repository.UserRepository;
import ru.hleb.springhleb.service.UserService;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final UserService userService;
    private final UserRepository userRepository;

    @PostMapping("/signup")
    public ResponseEntity<UserDto> signUp(@RequestBody SignUpDto request) {
        UserDto user = authenticationService.signUp(request);

        if (user == null) {
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(user);
    }

    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> signIn(@RequestBody SignInDto request) throws RoleNotFoundException {
        return ResponseEntity.ok(authenticationService.signIn(request));
    }

    @PostMapping("/refresh-token")
    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException, RoleNotFoundException {
        authenticationService.refreshToken(request, response);
    }
}

