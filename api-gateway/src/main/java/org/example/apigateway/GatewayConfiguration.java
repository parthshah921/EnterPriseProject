package org.example.apigateway;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;

@Configuration
public class GatewayConfiguration {

    @Bean
    public RouteLocator routeLocator(RouteLocatorBuilder builder) {
        return builder.routes()
                .route(r -> r.path("/products/**")
                        .uri("http://127.0.0.1:8080/"))
                .route(r -> r.path("/orders/**")
                        .uri("http://orders-service:8082/"))
                .route(r -> r.path("/admin/**")
                        .uri("http://admin-service:8083/"))
                .route(r -> r.path("/images/**")
                        .uri("http://images-service:8084/"))
                .build();
    }
}