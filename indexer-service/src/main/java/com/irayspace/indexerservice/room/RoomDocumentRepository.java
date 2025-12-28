package com.irayspace.indexerservice.room;

import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface RoomDocumentRepository extends ElasticsearchRepository<RoomDocument, String> {
}