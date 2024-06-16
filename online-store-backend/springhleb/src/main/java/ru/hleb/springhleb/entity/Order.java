package ru.hleb.springhleb.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.hleb.springhleb.entity.Address;
import ru.hleb.springhleb.entity.Cart;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(nullable = false)
    private String status;

    @Column(nullable = false)
    private Date createdAt;

    /*@ElementCollection
    @CollectionTable(name = "order_items", joinColumns = @JoinColumn(name = "order_id")))
    private List<Item> items;*/
}
