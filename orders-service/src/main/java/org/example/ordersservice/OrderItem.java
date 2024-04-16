package org.example.ordersservice;

import jakarta.persistence.*;


@Entity
@Table(name = "order_items")
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "product_id", nullable = false)
    private Integer productId;

    @Column(name = "quantity", nullable = false)
    private int quantity;

    // Constructors, getters, and setters omitted for brevity
}
