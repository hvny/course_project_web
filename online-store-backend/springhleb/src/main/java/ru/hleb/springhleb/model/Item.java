package ru.hleb.springhleb.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Item {
    private String title;
    private String  composition;
    private String image;
}
