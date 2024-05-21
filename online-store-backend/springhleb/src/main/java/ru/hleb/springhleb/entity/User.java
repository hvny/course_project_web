package ru.hleb.springhleb.entity;

import jakarta.persistence.*;
import lombok.*;

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
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    private String firstName;

    @Column(unique = true, nullable = false)
    private String phoneNumber;

    /*@OneToMany(mappedBy = "user")
    private Set<Address> addresses = new LinkedHashSet<>();*/
}
