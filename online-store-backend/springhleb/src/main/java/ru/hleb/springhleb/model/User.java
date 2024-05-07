package ru.hleb.springhleb.model;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Builder
public class User {
    private String firstName;
    private String email;
    private String phoneNumber;
}
