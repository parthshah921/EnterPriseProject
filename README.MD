# Microservices Backend API Documentation

This document provides an overview of the backend functionalities we have implemented for your microservices architecture.

## Table of Contents

- [Products Service](#products-service)
- [Orders Service](#orders-service)
- [Admin Service](#admin-service)
- [Image Service](#image-service)

## Products Service

The Products Service handles the management of product data.

### Endpoints

- **Get Products**
    - `GET /products`
    - Returns a list of all products.

- **Add Product**
    - `POST /products`
    - Accepts a product object in the request body and adds it to the product list.

- **Update Product**
    - `PUT /products/{id}`
    - Accepts a product ID in the URL and a product object in the request body, updating the specified product.

- **Delete Product**
    - `DELETE /products/{id}`
    - Accepts a product ID in the URL and deletes the specified product.

## Orders Service

The Orders Service handles the management of orders.

### Endpoints

- **Get Orders**
    - `GET /orders`
    - Returns a list of all orders.

- **Add Order**
    - `POST /orders`
    - Accepts an order object in the request body and adds it to the order list.

- **Get Order by ID**
    - `GET /orders/{id}`
    - Accepts an order ID in the URL and returns the specified order.

## Admin Service

The Admin Service manages admin functionalities, including product and order management.

### Endpoints

- **Add Product**
    - `POST /admin/products`
    - Accepts a product object in the request body and adds it to the product list.

- **Update Product**
    - `PUT /admin/products/{id}`
    - Accepts a product ID in the URL and a product object in the request body, updating the specified product.

- **Delete Product**
    - `DELETE /admin/products/{id}`
    - Accepts a product ID in the URL and deletes the specified product.

- **Get Orders**
    - `GET /admin/orders`
    - Returns a list of all orders.

- **Add Order**
    - `POST /admin/orders`
    - Accepts an order object in the request body and adds it to the order list.

## Image Service

The Image Service handles the management of images.

### Endpoints

- **Add Image**
    - `POST /images`
    - Accepts an image file in the request body and uploads it.

- **Get Image**
    - `GET /images/{imageId}`
    - Accepts an image ID in the URL and returns the specified image.

- **Delete Image**
    - `DELETE /images/{imageId}`
    - Accepts an image ID in the URL and deletes the specified image.

## Conclusion

These are the core backend functionalities we have implemented for your microservices architecture, including admin functionalities. Make sure to test each endpoint thoroughly and ensure your services are secure and performant. Let me know if you need further assistance.
