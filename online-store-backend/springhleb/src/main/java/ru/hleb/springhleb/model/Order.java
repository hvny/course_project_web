package ru.hleb.springhleb.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Order {
    private Cart cart;
    private Address address;
    private User user;
}
