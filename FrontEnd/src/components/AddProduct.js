import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
    // State variables to hold form input values
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');

    // Function to handle form submission
    const handleSubmit = async (event) => {
        // Prevent form submission from refreshing the page
        event.preventDefault();

        // Create a new product object based on form inputs
        const newProduct = {
            name,
            price: parseFloat(price), // Convert price to a number
            stock: parseInt(stock, 10), // Convert stock to an integer
        };

        try {
            // Make a POST request to the backend API to add the new product
            const response = await axios.post('http://127.0.0.1:8080/products', newProduct);

            // Log the response data (product added)
            console.log('Product added:', response.data);

            // Optionally, reset form fields after adding the product
            setName('');
            setPrice('');
            setStock('');
        } catch (error) {
            // Handle any errors that may occur during the request
            console.error('Error adding product:', error);
        }
    };

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        step="0.01"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Stock:</label>
                    <input
                        type="number"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default AddProduct;
