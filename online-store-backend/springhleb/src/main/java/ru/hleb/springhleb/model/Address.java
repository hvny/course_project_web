package ru.hleb.springhleb.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Address {
    private String city;
    private String houseNumber;
    private Integer entry;
    private Integer floor;
    private String apartment;
}
