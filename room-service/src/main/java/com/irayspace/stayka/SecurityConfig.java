package com.irayspace.stayka;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity(prePostEnabled = true)
public class SecurityConfig {

  @Bean
  public JwtAuthenticationConverter jwtAuthenticationConverter() {
    final var converter = new JwtAuthenticationConverter();

    converter.setJwtGrantedAuthoritiesConverter(
        j -> {
          final var authorities = new ArrayList<GrantedAuthority>();

          final Map<String, Object> realmAccess = j.getClaim("realm_access");
          if (realmAccess != null && realmAccess.containsKey("roles")) {
            if (realmAccess.get("roles") instanceof List<?> roles) {
              roles.stream()
                  .map(String.class::cast)
                  .forEach(r -> authorities.add(new SimpleGrantedAuthority("ROLE_" + r)));
            }
          }

          return authorities;
        });

    return converter;
  }

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) {
    return http.csrf(c -> c.disable())
        .authorizeHttpRequests(
            a -> {
              a.requestMatchers("/swagger-ui/*", "/v3/*", "/v3/api-docs/*").permitAll();
              a.anyRequest().authenticated();
            })
        .oauth2ResourceServer(o -> o.jwt(Customizer.withDefaults()))
        .build();
  }
}
