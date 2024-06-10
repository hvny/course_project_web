package ru.hleb.springhleb.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.hleb.springhleb.entity.User;
import ru.hleb.springhleb.model.JwtTokenProvider;
import ru.hleb.springhleb.service.UserService;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private final UserService userService;

    private final JwtTokenProvider jwtTokenProvider;

    /*@PostMapping("/create")
    public ResponseEntity<?> createUser(@RequestBody User user) {
        try {
            userService.saveUser(user);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }*/



    @GetMapping("/get/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        Optional<User> userOptional = Optional.ofNullable(userService.getUser(id));

        if (userOptional.isPresent()) {
            return ResponseEntity.ok(userOptional.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    /*@PutMapping("/update")
    public User updateUserInfo(@RequestBody User user) {
        return userService.updateUserInfo(user);
    }*/


//    private final UserService userService;

//    private JwtUtils jwtUtils;

    /*@GetMapping("/getAll")
    public List<User> finAllUsers() {
        return userService.findAllUsers();
    }*/

    /*@PostMapping("/create")
    public ResponseEntity createUser(@RequestBody User user) {
        User savedUser = userRepository.save(user);

        return ResponseEntity.ok(new AuthentificationResponse(jwtUtils.generateAccessToken(savedUser), jwtUtils.generateRefreshToken(savedUser)));
    }

    @GetMapping("/get-user/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUser(id);
    }*/

    /*@PutMapping("/update")
    public User updateUserInfo(User user) {
        return userService.updateUserInfo(user);
    }

    @DeleteMapping("/delete/{email}")
    public void deleteUser(Long id) {
        userService.deleteUser(id);
    }*/





}
