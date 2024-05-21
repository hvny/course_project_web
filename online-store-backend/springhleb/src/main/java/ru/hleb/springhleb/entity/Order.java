package ru.hleb.springhleb.entity;

import lombok.Builder;
import lombok.Data;
import ru.hleb.springhleb.entity.Address;
import ru.hleb.springhleb.entity.Cart;

@Data
@Builder
public class Order {
    private Cart cart;
    private Address address;
    private User user;
}
