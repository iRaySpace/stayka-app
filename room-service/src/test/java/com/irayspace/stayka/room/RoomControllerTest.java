package com.irayspace.stayka.room;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;

import com.irayspace.stayka.SecurityConfig;
import java.math.BigDecimal;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.context.annotation.Import;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.assertj.MockMvcTester;
import org.springframework.test.web.servlet.assertj.MockMvcTester.MockMvcRequestBuilder;

@WebMvcTest(RoomController.class)
@Import(SecurityConfig.class)
public class RoomControllerTest {

  @Autowired private MockMvcTester mockMvcTester;

  @MockitoBean private RoomService roomService;

  // Instance variables
  private Room room;

  @BeforeEach
  private void setup() {
    room =
        Room.builder()
            .title("Room 2BR")
            .description("Fancy description")
            .location("City")
            .price(new BigDecimal("1000.00"))
            .bedrooms(2)
            .imageUrl("https://example.com/image.jpg")
            .build();
  }

  @Test
  @DisplayName("POST /rooms - should call service")
  public void postRoom_ShouldCallService() {
    // Arrange
    when(roomService.createRoom(any(CreateRoom.class))).thenReturn(room);

    final String requestBody =
        """
                {
                    "title": "Room 2BR",
                    "description": "Fancy description",
                    "location": "City",
                    "price": "1000.00",
                    "bedrooms": 2,
                    "imageUrl": "https://example.com/image.jpg"
                }
                """;

    // Act
    final MockMvcRequestBuilder requestBuilder =
        mockMvcTester
            .post()
            .uri("/rooms")
            .with(user("admin@irayspace.com").roles("ADMIN"))
            .contentType(MediaType.APPLICATION_JSON)
            .content(requestBody);

    // Assert
    assertThat(requestBuilder).hasStatus(HttpStatus.CREATED);

    // Verify
    verify(roomService).createRoom(any());
  }

  @Test
  @DisplayName("POST /rooms - should map input")
  public void postRoom_ShouldMapInput() {
    // Arrange
    when(roomService.createRoom(any(CreateRoom.class))).thenReturn(room);

    final String requestBody =
        """
                {
                    "title": "Room 2BR",
                    "description": "Fancy description",
                    "location": "City",
                    "price": "1000.00",
                    "bedrooms": 2,
                    "imageUrl": "https://example.com/image.jpg"
                }
                """;

    // Act
    final MockMvcRequestBuilder requestBuilder =
        mockMvcTester
            .post()
            .uri("/rooms")
            .with(user("admin@irayspace.com").roles("ADMIN"))
            .contentType(MediaType.APPLICATION_JSON)
            .content(requestBody);

    // Assert
    final var response = assertThat(requestBuilder).hasStatus(HttpStatus.CREATED).bodyJson();
    assertThat(response.extractingPath("$.title").isEqualTo("Room 2BR"));
    assertThat(response.extractingPath("$.description").isEqualTo("Fancy description"));
    assertThat(response.extractingPath("$.location").isEqualTo("City"));
    assertThat(response.extractingPath("$.price").isEqualTo(1000.00));
    assertThat(response.extractingPath("$.bedrooms").isEqualTo(2));
    assertThat(response.extractingPath("$.imageUrl").isEqualTo("https://example.com/image.jpg"));
  }

  @Test
  @DisplayName("PUT /rooms - should call service")
  public void putRoom_ShouldCallService() {
    // Arrange
    when(roomService.updateRoom(any(UpdateRoom.class))).thenReturn(room);

    final String requestBody =
        """
                {
                    "id": "room-1",
                    "title": "Room 2BR",
                    "description": "Fancy description",
                    "location": "City",
                    "price": "1000.00",
                    "bedrooms": 2,
                    "imageUrl": "https://example.com/image.jpg"
                }
                """;

    final var requestBuilder =
        mockMvcTester
            .put()
            .uri("/rooms")
            .with(user("admin@irayspace.com").roles("ADMIN"))
            .contentType(MediaType.APPLICATION_JSON)
            .content(requestBody);

    // Act & Assert
    assertThat(requestBuilder).hasStatus(HttpStatus.OK);

    // Verify
    verify(roomService).updateRoom(any());
  }

  @Test
  @DisplayName("GET /rooms/{id} - should call service")
  public void getRoom_ShouldCallService() {
    final var requestBody =
        """
                {
                    "id": "room-1",
                    "title": "Room 2BR",
                    "description": "Fancy description",
                    "location": "City",
                    "price": "1000.00",
                    "bedrooms": 2,
                    "imageUrl": "https://example.com/image.jpg"
                }
                """;

    final var requestBuilder =
        mockMvcTester
            .get()
            .uri("/rooms/room-1")
            .with(user("admin@irayspace.com").roles("ADMIN"))
            .contentType(MediaType.APPLICATION_JSON)
            .content(requestBody);

    // Act & Assert
    assertThat(requestBuilder).hasStatus(HttpStatus.OK);

    // Verify
    verify(roomService).getRoomById(any());
  }
}
