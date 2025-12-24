package com.irayspace.stayka;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;
import java.util.Map;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;

public class JwtAuthenticationConverterTest {

    private JwtAuthenticationConverter converter;

    @BeforeEach
    private void setup() {
        converter = new SecurityConfig().jwtAuthenticationConverter();
    }

    @Test
    public void convert_ShouldMapRoles() {
        // Arrange
        final var hostJwt = Jwt.withTokenValue("token")
                .header("alg", "RS256")
                .subject("user-host-id")
                .claim("realm_access", Map.of("roles", List.of("host")))
                .build();

        // Act
        final var authentication = converter.convert(hostJwt);
        final var roles = authentication.getAuthorities().stream()
                .filter(r -> r.getAuthority().startsWith("ROLE_"))
                .map(GrantedAuthority::getAuthority)
                .toList();

        // Assert
        assertThat(roles).containsExactly("ROLE_host");
    }

    @Test
    public void convert_ShouldHaveEmptyRoles() {
        final var emptyJwt = Jwt.withTokenValue("token")
                .header("alg", "RS256")
                .subject("user-host-id")
                .claim("realm_access", Map.of("roles", List.of()))
                .build();
        final var authentication = converter.convert(emptyJwt);
        final var roles = authentication.getAuthorities().stream()
                .filter(r -> r.getAuthority().startsWith("ROLE_"))
                .map(GrantedAuthority::getAuthority)
                .toList();
        assertThat(roles).isEmpty();
    }
}
