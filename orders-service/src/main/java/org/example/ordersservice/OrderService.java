package org.example.ordersservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductServiceClient productServiceClient;

    public Order createOrder(Integer productId, int quantity) {
        // Get the product price and stock
        Product product = productServiceClient.getProductById(productId);
        if (product == null || product.getStock() < quantity) {
            throw new IllegalArgumentException("Product not available or insufficient stock");
        }

        // Calculate total price
        BigDecimal totalPrice = product.getPrice().multiply(BigDecimal.valueOf(quantity));

        // Create the order
        Order order = new Order();
        order.setProductId(productId);
        order.setQuantity(quantity);
        order.setTotalPrice(totalPrice);
        order.setOrderDate(LocalDateTime.now());
        orderRepository.save(order);

        // Update product stock
        product.setStock(product.getStock() - quantity);
        productServiceClient.updateProductStock(productId, product.getStock());

        return order;
    }

    public Order getOrderById(Integer id) {
        return orderRepository.findById(id).orElse(null);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }
}

