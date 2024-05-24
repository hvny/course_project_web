package ru.hleb.springhleb.dto.response;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

@Value
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserDto {
    private Long id;
    String firstName;
    String phoneNumber;

}
