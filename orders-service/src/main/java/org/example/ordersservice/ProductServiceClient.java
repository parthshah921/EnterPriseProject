package org.example.ordersservice;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

@FeignClient(name = "products-service", url = "http://127.0.0.1:8080/")

public interface ProductServiceClient {
    @GetMapping("/products/{id}")
    Product getProductById(@PathVariable Integer id);

    @PutMapping("/products/{id}/stock")
    void updateProductStock(@PathVariable Integer id, @RequestBody int stock);
}
