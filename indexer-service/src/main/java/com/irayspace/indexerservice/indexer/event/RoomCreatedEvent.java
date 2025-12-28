package com.irayspace.indexerservice.indexer.event;

import java.math.BigDecimal;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RoomCreatedEvent {
    private String id;
    private String title;
    private String description;
    private String location;
    private BigDecimal price;
    private int bedrooms;
}
