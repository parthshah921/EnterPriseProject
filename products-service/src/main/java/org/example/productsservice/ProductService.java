package org.example.productsservice;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public Product getProductById(Integer id) {
        return productRepository.findById( (id)).orElse(null);
    }

    public Product updateProduct(Integer id, Product productDetails) {
        Product product = getProductById(id);
        if (product != null) {
            product.setName(productDetails.getName());
            product.setDescription(productDetails.getDescription());
            product.setPrice(productDetails.getPrice());
            product.setStock(productDetails.getStock());
            product.setImageId(productDetails.getImageId());
            return productRepository.save(product);
        }
        return null;
    }

    public void deleteProduct(Integer id) {
        productRepository.deleteById(id);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
}
