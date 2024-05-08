package ru.hleb.springhleb.controller;

import lombok.AllArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.hleb.springhleb.model.User;
import ru.hleb.springhleb.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/user")
@AllArgsConstructor
public class UserController {

    private final UserService service;

    @GetMapping
    public List<User> finAllUsers() {
        return service.findAllUsers();
    }

    @PostMapping("/create")
    public User createUser(@RequestBody User user) {
        return service.createUser(user);
    }

    @GetMapping("/{email}")
    public User getUser(@PathVariable String email) {
        return service.getUser(email);
    }

    @PutMapping("/update")
    public User updateUserInfo(User user) {
        return service.updateUserInfo(user);
    }

    @DeleteMapping("/delete/{email}")
    public void deleteUser(String email) {
        service.deleteUser(email);
    }





}
