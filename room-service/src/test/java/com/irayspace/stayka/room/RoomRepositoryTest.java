package com.irayspace.stayka.room;

import static org.assertj.core.api.Assertions.assertThat;

import com.irayspace.stayka.JpaConfig;
import java.math.BigDecimal;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;
import org.springframework.context.annotation.Import;

@DataJpaTest
@Import(JpaConfig.class)
public class RoomRepositoryTest {

  @Autowired private RoomRepository roomRepository;

  @Test
  public void whenSave_thenIdIsGenerated() {
    Room room =
        Room.builder()
            .title("Room 2BR")
            .description("Fancy description")
            .location("City")
            .price(new BigDecimal("1000.00"))
            .bedrooms(2)
            .imageUrl("https://example.com/image.jpg")
            .build();

    // When
    roomRepository.save(room);

    // Then
    assertThat(room.getId()).isNotNull();
    assertThat(room.getId()).isNotEmpty();
  }

  @Test
  public void whenSave_thenCreatedAndUpdatedIsGenerated() {
    Room room =
        Room.builder()
            .title("Room 2BR")
            .description("Fancy description")
            .location("City")
            .price(new BigDecimal("1000.00"))
            .bedrooms(2)
            .imageUrl("https://example.com/image.jpg")
            .build();

    // When
    roomRepository.save(room);

    // Then
    assertThat(room.getCreatedAt()).isNotNull();
    assertThat(room.getCreatedBy()).isNotNull();
    assertThat(room.getUpdatedAt()).isNotNull();
    assertThat(room.getUpdatedBy()).isNotNull();
  }
}
