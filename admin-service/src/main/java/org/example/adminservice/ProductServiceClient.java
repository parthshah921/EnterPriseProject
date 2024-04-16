package org.example.adminservice;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

@FeignClient(name = "products-service", url = "http://127.0.0.1:8080/")
public interface ProductServiceClient {
    @PostMapping("/products")
    Product createProduct(@RequestBody Product product);

    @GetMapping("/products/{id}")
    Product getProductById(@PathVariable Integer id);

    @PutMapping("/products/{id}")
    Product updateProduct(@PathVariable Integer id, @RequestBody Product productDetails);

    @DeleteMapping("/products/{id}")
    void deleteProduct(@PathVariable Long id);


}
