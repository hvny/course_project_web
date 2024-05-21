package ru.hleb.springhleb.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "items")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private Double price;

    @Column(nullable = false)
    private String composition;

    @Column(nullable = false)
    private String weight;

    @Column(nullable = false)
    private String image;

    public Item(String category, String title, Double price, String composition, String weight, String image) {
        this.category = category;
        this.title = title;
        this.price = price;
        this.composition = composition;
        this.weight = weight;
        this.image = image;
    }
}
