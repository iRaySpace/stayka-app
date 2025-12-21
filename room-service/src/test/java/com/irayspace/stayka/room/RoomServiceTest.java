package com.irayspace.stayka.room;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.argThat;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.math.BigDecimal;
import java.util.Optional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class RoomServiceTest {

  @Mock private RoomRepository roomRepository;

  private RoomService roomService;

  // Instance variables
  private CreateRoom input;
  private Room room;

  @BeforeEach
  private void setup() {
    roomService = new RoomService(roomRepository);

    input = new CreateRoom();
    input.setTitle("Room 2BR");
    input.setDescription("Fancy description");
    input.setLocation("City");
    input.setPrice(new BigDecimal("1000.00"));
    input.setBedrooms(2);
    input.setImageUrl("https://example.com/image.jpg");

    room =
        Room.builder()
            .id("room-1")
            .title(input.getTitle())
            .description(input.getDescription())
            .location(input.getLocation())
            .price(input.getPrice())
            .bedrooms(input.getBedrooms())
            .imageUrl(input.getImageUrl())
            .build();
  }

  @Test
  public void createRoom_ShouldSaveToRepository() {
    // Arrange
    when(roomRepository.save(any(Room.class))).thenReturn(room);

    // Act
    roomService.createRoom(input);

    // Assert
    verify(roomRepository).save(any());
  }

  @Test
  public void createRoom_ShouldMapInputFields() {
    // Arrange
    when(roomRepository.save(any(Room.class))).thenReturn(room);

    // Act
    final Room result = roomService.createRoom(input);

    // Assert
    assertNotNull(result);
    assertEquals("Room 2BR", result.getTitle());
    assertEquals("Fancy description", result.getDescription());
    assertEquals("City", result.getLocation());
    assertEquals(new BigDecimal("1000.00"), result.getPrice());
    assertEquals(2, result.getBedrooms());
    assertEquals("https://example.com/image.jpg", result.getImageUrl());
  }

  @Test
  public void getRoom_ShouldMapFields() {
    // Arrange
    when(roomService.getRoomById(any())).thenReturn(Optional.of(room));

    // Act
    final var existingRoom = roomService.getRoomById("room-1");

    // Assert
    assertEquals(true, existingRoom.isPresent());

    final var room = existingRoom.get();
    assertEquals("Room 2BR", room.getTitle());
    assertEquals("Fancy description", room.getDescription());
    assertEquals("City", room.getLocation());
    assertEquals(new BigDecimal("1000.00"), room.getPrice());
    assertEquals(2, room.getBedrooms());
    assertEquals("https://example.com/image.jpg", room.getImageUrl());
  }

  @Test
  public void updateRoom_ShouldMapInputFieldsAndSave() {
    // Arrange
    final var roomId = room.getId();

    when(roomRepository.findById(roomId)).thenReturn(Optional.of(room));
    when(roomRepository.save(any(Room.class))).thenReturn(room);

    final var updatedRoom = new UpdateRoom();
    updatedRoom.setId(roomId);
    updatedRoom.setTitle("Room 3BR");
    updatedRoom.setDescription(room.getDescription());
    updatedRoom.setLocation(room.getLocation());
    updatedRoom.setPrice(new BigDecimal("1500.00"));
    updatedRoom.setBedrooms(3);
    updatedRoom.setImageUrl("https://example.com/image3.jpg");

    // Act
    final var result = roomService.updateRoom(updatedRoom);

    // Assert
    assertEquals("room-1", result.getId());
    assertEquals("Room 3BR", result.getTitle());
    assertEquals("Fancy description", result.getDescription());
    assertEquals("City", result.getLocation());
    assertEquals(new BigDecimal("1500.00"), result.getPrice());
    assertEquals(3, result.getBedrooms());
    assertEquals("https://example.com/image3.jpg", result.getImageUrl());

    // Verify
    verify(roomRepository).findById(roomId);
    verify(roomRepository)
        .save(
            argThat(
                room ->
                    room.getTitle().equals("Room 3BR")
                        && room.getPrice().equals(new BigDecimal("1500.00"))
                        && room.getBedrooms() == 3
                        && room.getImageUrl().equals("https://example.com/image3.jpg")));
  }
}
