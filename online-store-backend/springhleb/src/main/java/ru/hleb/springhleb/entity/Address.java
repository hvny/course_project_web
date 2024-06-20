package ru.hleb.springhleb.entity;

import jakarta.persistence.*;
import lombok.*;
@Data
@Entity
@Table(name = "addresses")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "house_number", nullable = false)
    private String houseNumber;

    @Column(name = "entry")
    private Integer entry;

    @Column(name = "floor", nullable = false)
    private Integer floor;

    @Column(name = "apartment")
    private String apartment;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
