import React from 'react';
import axios from 'axios';

function DeleteProduct({ productId, onProductDeleted }) {
    const handleDelete = async () => {
        try {
            await axios.delete(`http://127.0.0.1:8080/products/${productId}`);
            console.log(`Product with ID ${productId} deleted`);
            onProductDeleted(productId); // Optionally, handle UI updates after deleting the product
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <button onClick={handleDelete}>
            Delete Product
        </button>
    );
}

export default DeleteProduct;
