package com.irayspace.indexerservice.indexer;

import java.math.BigDecimal;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.irayspace.indexerservice.indexer.event.RoomCreatedEvent;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class IndexerConsumer {

    private final ObjectMapper objectMapper;
    private final IndexerService indexerService;

    @KafkaListener(topics = "room.created")
    public void handleRoomCreated(String message) {
        try {
            final var json = objectMapper.readTree(message);
            final var eventData = mapRoomCreatedMessage(json);
            indexerService.indexRoom(eventData);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private RoomCreatedEvent mapRoomCreatedMessage(JsonNode json) {
        return RoomCreatedEvent.builder()
            .id(json.get("id").asText())
            .title(json.get("title").asText())
            .description(json.get("description").asText())
            .location(json.get("location").asText())
            .price(new BigDecimal(json.get("price").toString()))
            .bedrooms(json.get("bedrooms").asInt())
            .build();
    }

}
