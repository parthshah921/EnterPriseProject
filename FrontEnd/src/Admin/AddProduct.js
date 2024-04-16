import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newProduct = {
            name,
            price: parseFloat(price),
            stock: parseInt(stock, 10),
        };

        try {
            const response = await axios.post('http://127.0.0.1:8080/products', newProduct);
            console.log('Product added:', response.data);
            // Reset form fields or handle the UI update after adding the product
            setName('');
            setPrice('');
            setStock('');
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </div>
                <div>
                    <label>Stock:</label>
                    <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} required />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default AddProduct;
