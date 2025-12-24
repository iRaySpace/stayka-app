package com.irayspace.stayka.room;

import static org.assertj.core.api.Assertions.assertThat;

import com.irayspace.stayka.JpaConfig;
import java.math.BigDecimal;
import java.util.List;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;

@DataJpaTest
@Import(JpaConfig.class)
public class RoomRepositoryTest {

    @Autowired
    private RoomRepository roomRepository;

    // Instance variables
    private Room room;

    @BeforeEach
    private void setup() {
        room = Room.builder()
                .title("Room 2BR")
                .description("Fancy description")
                .location("City")
                .price(new BigDecimal("1000.00"))
                .bedrooms(2)
                .imageUrl("https://example.com/image.jpg")
                .build();

        final var context = SecurityContextHolder.createEmptyContext();
        final var authentication = new JwtAuthenticationToken(
                Jwt.withTokenValue("token")
                        .header("alg", "none")
                        .claim("sub", "user-host-id")
                        .claim("email", "host@user.com")
                        .claim("name", "Host User")
                        .build(),
                List.of(new SimpleGrantedAuthority("ROLE_host")));
        context.setAuthentication(authentication);

        SecurityContextHolder.setContext(context);
    }

    @AfterEach
    private void tearDown() {
        SecurityContextHolder.clearContext();
    }

    @Test
    public void whenSave_thenIdIsGenerated() {
        // When
        roomRepository.save(room);

        // Then
        assertThat(room.getId()).isNotNull();
        assertThat(room.getId()).isNotEmpty();
    }

    @Test
    public void whenSave_thenCreatedAndUpdatedIsGenerated() {
        // When
        roomRepository.save(room);

        // Then
        assertThat(room.getCreatedAt()).isNotNull();
        assertThat(room.getUpdatedAt()).isNotNull();

        assertThat(room.getCreatedBy()).isNotNull();
        assertThat(room.getCreatedBy()).isEqualTo("user-host-id");

        assertThat(room.getUpdatedBy()).isNotNull();
        assertThat(room.getCreatedBy()).isEqualTo("user-host-id");
    }
}
