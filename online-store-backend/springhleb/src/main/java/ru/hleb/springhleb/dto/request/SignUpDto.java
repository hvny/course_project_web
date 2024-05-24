package ru.hleb.springhleb.dto.request;


import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SignUpDto {
    private String firstName;
    private String phoneNumber;
    private String password;
}
