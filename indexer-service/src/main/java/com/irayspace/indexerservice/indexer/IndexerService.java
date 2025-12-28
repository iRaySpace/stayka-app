package com.irayspace.indexerservice.indexer;

import org.springframework.stereotype.Service;

import com.irayspace.indexerservice.indexer.event.RoomCreatedEvent;
import com.irayspace.indexerservice.room.RoomDocument;
import com.irayspace.indexerservice.room.RoomDocumentRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class IndexerService {

    private final RoomDocumentRepository roomDocumentRepository;

    public RoomDocument indexRoom(RoomCreatedEvent eventData) {
        final var newDocument = RoomDocument.builder()
            .id(eventData.getId())
            .title(eventData.getTitle())
            .description(eventData.getDescription())
            .location(eventData.getLocation())
            .price(eventData.getPrice())
            .bedrooms(eventData.getBedrooms())
            .build();
        return roomDocumentRepository.save(newDocument); 
    }

}
