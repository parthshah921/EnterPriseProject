import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductList({ onAddToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products data from the backend server
    axios.get('http://127.0.0.1:8080/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://127.0.0.1:8080/products/${productId}`);
      // Remove the deleted product from the state
      setProducts(products.filter(product => product.id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>Stock: {product.stock}</p>
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
          {/* Link to update product page */}
          <Link to={`/admin/products/update/${product.id}`}>
            <button>Update Product</button>
          </Link>
          {/* Button to delete product */}
          <button onClick={() => handleDeleteProduct(product.id)}>Delete Product</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
