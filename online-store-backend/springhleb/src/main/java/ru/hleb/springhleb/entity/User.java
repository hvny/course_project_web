package ru.hleb.springhleb.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;

    @Column(unique = true, nullable = false)
    private String phoneNumber;

    @Column(nullable = false)
    private String password;

    @Column(nullable = true)
    private String refreshToken;

    /*@OneToMany(mappedBy = "user")
    private Set<Address> addresses = new LinkedHashSet<>();*/

    @OneToMany(mappedBy = "user")
    private List<Order> orders;
}
