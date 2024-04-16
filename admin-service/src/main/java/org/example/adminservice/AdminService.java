package org.example.adminservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

@Service
public class AdminService {

    @Autowired
    private ProductServiceClient productServiceClient;

    public Product createProduct(Product product) {
        return productServiceClient.createProduct(product);
    }

    public Product updateProduct(Integer id, Product productDetails) {
        return productServiceClient.updateProduct(id, productDetails);
    }

    public void deleteProduct(Long id) {
        productServiceClient.deleteProduct(id);
    }
}

