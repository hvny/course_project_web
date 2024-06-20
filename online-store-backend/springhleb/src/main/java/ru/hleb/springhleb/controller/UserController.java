package ru.hleb.springhleb.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.hleb.springhleb.entity.Address;
import ru.hleb.springhleb.entity.User;
import ru.hleb.springhleb.exception.AddressNotFoundException;
import ru.hleb.springhleb.model.JwtTokenProvider;
import ru.hleb.springhleb.service.UserService;

import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private final UserService userService;
    private final JwtTokenProvider jwtTokenProvider;

    @GetMapping("/get")
    public ResponseEntity<?> getUserInfo(@RequestHeader("Authorization") String authorization) {
        if (authorization == null || !authorization.startsWith("Bearer ")) {
            return ResponseEntity.badRequest().build();
        }

        String token = authorization.substring("Bearer ".length());
        String phoneNumber = jwtTokenProvider.getPhoneNumberFromToken(token);

        Optional<User> userOptional = Optional.ofNullable(userService.getUser(phoneNumber));

        if (userOptional.isPresent()) {
            return ResponseEntity.ok(userOptional.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/addresses")
    public ResponseEntity<?> addAddress(@RequestHeader("Authorization") String authorization, @RequestBody Address address) {
        String phoneNumber = jwtTokenProvider.getPhoneNumberFromToken(authorization);
        User user = userService.getUser(phoneNumber);
        userService.addAddress(user.getId(), address);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/addresses/{id}")
    public ResponseEntity<?> editAddress(@RequestHeader("Authorization") String authorization, @PathVariable Long id, @RequestBody Address updatedAddress) {
        String phoneNumber = jwtTokenProvider.getPhoneNumberFromToken(authorization);
        User user = userService.getUser(phoneNumber);
        if (!user.getAddresses().contains(updatedAddress)) {
            throw new AddressNotFoundException("Адрес не найден");
        }
        userService.editAddress(id, updatedAddress);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/addresses/{id}")
    public ResponseEntity<?> deleteAddress(@RequestHeader("Authorization") String authorization, @PathVariable Long id) {
        String phoneNumber = jwtTokenProvider.getPhoneNumberFromToken(authorization);
        User user = userService.getUser(phoneNumber);
        if (!user.getAddresses().contains(id)) {
            throw new AddressNotFoundException("Адрес не найден");
        }
        userService.deleteAddress(id);
        return ResponseEntity.ok().build();
    }
}
