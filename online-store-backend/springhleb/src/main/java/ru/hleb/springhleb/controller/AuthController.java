package ru.hleb.springhleb.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.server.ResponseStatusException;
import ru.hleb.springhleb.entity.User;
import ru.hleb.springhleb.model.AuthenticationResponse;
import ru.hleb.springhleb.repository.UserRepository;
import ru.hleb.springhleb.service.AuthService;
import ru.hleb.springhleb.service.UserService;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody Map<String, String> request) {
        String firstName = request.get("firstName");
        String phoneNumber = request.get("phoneNumber");
        String password = request.get("password");

        try {
            User newUser = authService.signUp(firstName, phoneNumber, password);
            return ResponseEntity.ok(newUser);
        } catch (RuntimeException e) {
            Map<String, String> errorMessage = new HashMap<>();
            errorMessage.put("error", "Пользователь уже существует");
            return ResponseEntity.badRequest().body(errorMessage);
        }
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signIn(@RequestBody Map<String, String> authMap) {
        String phoneNumber = authMap.get("phoneNumber");
        String password = authMap.get("password");

        if (phoneNumber == null || password == null) {
            return ResponseEntity.badRequest().body(null);
        }

        try {
            AuthenticationResponse authResponse = authService.signIn(phoneNumber, password);
            return ResponseEntity.ok(authResponse);
        } catch (ResponseStatusException e) {
            Map<String, String> errorMessage = new HashMap<>();
            errorMessage.put("message", e.getReason());
            return ResponseEntity.status(e.getStatusCode()).body(errorMessage);
        }
    }

    @PostMapping("/signout")
    public ResponseEntity<Void> signOut(@RequestBody Map<String, String> authMap) {
        String refreshToken = authMap.get("refreshToken");

        if (refreshToken == null) {
            return ResponseEntity.badRequest().build();
        }

        authService.signOut(refreshToken);

        return ResponseEntity.ok().build();
    }
}

