package ru.hleb.springhleb.controller;

import lombok.AllArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
//import ru.hleb.springhleb.model.User;
import ru.hleb.springhleb.entity.User;
import ru.hleb.springhleb.model.JwtTokenProvider;
import ru.hleb.springhleb.repository.UserRepository;
import ru.hleb.springhleb.service.UserService;
import ru.hleb.springhleb.service.impl.UserServiceImpl;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private final UserService userService;

    private final JwtTokenProvider jwtTokenProvider;

    @PostMapping("/create")
    public ResponseEntity<?> createUser(@RequestBody User user) {
        try {
            userService.saveUser(user);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    /*@GetMapping("/get-user/{email}")
    public ResponseEntity<?> getUserById(@PathVariable String email) {
        Optional<User> userOptional = userService.getUserByEmail(email);

        if (userOptional.isPresent()) {
            return ResponseEntity.ok(userOptional.get());
        } else {
            return ResponseEntity.notFound().build();
        }
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
