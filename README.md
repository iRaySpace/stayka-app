# Stayka

A distributed room management platform built with event-driven architecture, enabling hosts to list rooms and users to search available rooms.

## Architecture Overview

This application follows a microservices architecture with event-driven communication:

- **room-service**: Handles property management operations (CRUD for rooms)
- **indexer-service**: Consumes events and indexes data into Elasticsearch
- **search-service**: Provides search functionality with filtering capabilities

### Event Flow

```
Host adds property → room-service → Kafka (room.created event) → indexer-service → Elasticsearch → search-service
```

## Tech Stack

- **Framework**: Spring Boot (Java)
- **Authentication**: Keycloak + Google Auth Platform
- **Message Broker**: Redpanda (Kafka-compatible)
- **Search Engine**: Elasticsearch 9.2.3
- **Containerization**: Docker Compose

## Services

### Infrastructure Services

| Service | Port | Description |
|---------|------|-------------|
| Keycloak | 8080 | Authentication and authorization server |
| Redpanda | 19092 (Kafka), 18081 (Schema Registry), 18082 (Proxy) | Event streaming platform |
| Redpanda Console | 18080 | Web UI for Redpanda management |
| Elasticsearch | 9200 | Search and analytics engine |
| Kibana | 5601 | Elasticsearch data visualization |

### Application Services

- **room-service**: Manages property listings
- **indexer-service**: Indexes properties into Elasticsearch
- **search-service**: Provides search API with filters

## Prerequisites

- Docker and Docker Compose
- JDK 21+ (for local development)
- Gradle

## Getting Started

### 1. Start Infrastructure Services

```bash
docker-compose up -d
```

This will start:
- Keycloak (admin console: http://localhost:8080, credentials: admin/admin)
- Redpanda with Schema Registry
- Redpanda Console (http://localhost:18080)
- Elasticsearch (http://localhost:9200)
- Kibana (http://localhost:5601)

### 2. Configure Keycloak

1. Access Keycloak admin console at http://localhost:8080
2. Create a new realm for your application
3. Configure Google OAuth provider
4. Create client applications for each service

### 3. Build and Run Application Services

```bash
# Run room-service
cd room-service
./gradlew bootRun

# Run indexer-service
cd indexer-service
./gradlew bootRun

# Run search-service
cd search-service
./gradlew bootRun
```

## API Documentation
I have added springdoc to `room-service` and then `search-service`. It can be accessed via `<service-url>/swagger-ui/index.html`.

## Development
The development is Test-Driven. Basically, I followed the Red-Green-Refactor in doing the development and then Arrange-Act-Assert for the test format.

### Running Tests

```bash
mvn test
```

## Monitoring

- **Redpanda Console**: http://localhost:18080 - Monitor Kafka topics and messages
- **Kibana**: http://localhost:5601 - Visualize Elasticsearch data and monitor indices
- **Elasticsearch**: http://localhost:9200/_cat/indices?v - View index status

## Troubleshooting

### Elasticsearch Memory Issues

If Elasticsearch fails to start, increase Docker memory allocation:

```bash
# In Docker Desktop settings, increase memory to at least 4GB
```

### Redpanda Connection Issues

Verify Redpanda is healthy:

```bash
docker exec -it redpanda-0 rpk cluster health
```

### Authentication Issues

Ensure Keycloak is properly configured and tokens are valid:

```bash
curl http://localhost:8080/realms/{realm-name}/.well-known/openid-configuration
```
