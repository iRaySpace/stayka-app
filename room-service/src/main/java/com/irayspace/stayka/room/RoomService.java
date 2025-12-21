package com.irayspace.stayka.room;

import com.irayspace.stayka.room.exception.RoomNotFoundException;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RoomService {

  private final RoomRepository roomRepository;

  public Room createRoom(CreateRoom input) {
    final var newRoom =
        Room.builder()
            .title(input.getTitle())
            .description(input.getDescription())
            .location(input.getLocation())
            .price(input.getPrice())
            .bedrooms(input.getBedrooms())
            .imageUrl(input.getImageUrl())
            .build();
    return roomRepository.save(newRoom);
  }

  public Optional<Room> getRoomById(String id) {
    return roomRepository.findById(id);
  }

  public Room updateRoom(UpdateRoom input) {
    final var room =
        getRoomById(input.getId()).orElseThrow(() -> new RoomNotFoundException(input.getId()));

    room.setTitle(input.getTitle());
    room.setDescription(input.getDescription());
    room.setLocation(input.getLocation());
    room.setPrice(input.getPrice());
    room.setBedrooms(input.getBedrooms());
    room.setImageUrl(input.getImageUrl());

    return roomRepository.save(room);
  }
}
