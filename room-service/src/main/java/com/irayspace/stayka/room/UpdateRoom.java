package com.irayspace.stayka.room;

import java.math.BigDecimal;
import lombok.Data;

@Data
public class UpdateRoom {
    private String id;
    private String title;
    private String description;
    private String location;
    private BigDecimal price;
    private int bedrooms;
    private String imageUrl;
}
