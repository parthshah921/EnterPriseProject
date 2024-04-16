package org.example.adminservice;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@FeignClient(name = "orders-service")
public interface OrderServiceClient {
    @GetMapping("/orders")
    List<Order> getAllOrders();
}
