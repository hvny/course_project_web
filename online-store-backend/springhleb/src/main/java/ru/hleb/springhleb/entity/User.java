package ru.hleb.springhleb.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.LinkedHashSet;
import java.util.Set;
@Data
@Entity
/*@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder*/
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "id")
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

//    @Column(name = "first_name", nullable = false)
    private String firstName;
    @Column(unique = true)
    private String phoneNumber;

    /*@OneToMany(mappedBy = "user")
    private Set<Address> addresses = new LinkedHashSet<>();*/
}
