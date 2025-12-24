package com.irayspace.stayka;

import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.security.OAuthFlow;
import io.swagger.v3.oas.annotations.security.OAuthFlows;
import io.swagger.v3.oas.annotations.security.SecurityScheme;

@Configuration
// spotless:off
@SecurityScheme(
    name = "keycloakAuth",
    type = SecuritySchemeType.OAUTH2,
    flows = @OAuthFlows(
        password = @OAuthFlow(
            authorizationUrl = "${keycloak.authorization-url}",
            tokenUrl = "${keycloak.token-url}"
        )
    )
)
// spotless:on
public class OpenApiConfig {}
