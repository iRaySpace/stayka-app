package com.irayspace.indexerservice.room;

import java.math.BigDecimal;

import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
@Document(indexName = "idx_room")
public class RoomDocument {

    @Id
    private String id;

    private String title;
    private String description;
    private String location;

    private BigDecimal price;
    private int bedrooms;

}
