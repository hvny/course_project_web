package ru.hleb.springhleb.service;

import org.springframework.stereotype.Service;
import ru.hleb.springhleb.entity.User;
import ru.hleb.springhleb.model.JwtTokenProvider;
import ru.hleb.springhleb.repository.UserRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

/*
@Service
public interface UserService {
    List<User> findAllUsers();
    User createUser(User user);
    User getUser(Long id);
    User updateUserInfo(User user);
    void deleteUser(Long id);
}
*/
@Service
public interface UserService {
    /*private UserRepository userRepository;

    private JwtTokenProvider jwtTokenProvider;*/

    public User saveUser(User user);
    public User getUserByEmail(String email);

    /*public void saveUser(User user) {
//        user.setId(Long.valueOf(UUID.randomUUID().toString())); // Или другой способ генерации ID
        *//*user.setCreatedAt(LocalDateTime.now());
        user.setUpdatedAt(LocalDateTime.now());*//*
        userRepository.save(user);
    }

    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    public String generateAccessToken(String email) {
        // Логика генерации токена
        return jwtTokenProvider.generateAccessToken(email);
    }

    public String generateRefreshToken(String email) {
        // Логика генерации токена
        return jwtTokenProvider.generateRefreshToken(email);
    }
*/
    // Другие методы сервиса...
}