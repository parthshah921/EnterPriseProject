import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateProduct() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: '',
        price: '',
        stock: ''
    });

    useEffect(() => {
        // Fetch the product data using the product ID
        axios.get(`http://127.0.0.1:8080/products/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching product:', error);
            });
    }, [id]);

    // Handler to update the product
    const handleUpdate = async (event) => {
        event.preventDefault();

        try {
            // Make a PUT request to the backend server with the updated product data
            await axios.put(`http://127.0.0.1:8080/products/${id}`, product);
            console.log('Product updated successfully!');

            // Navigate back to the product list or another page as needed
            navigate('/products');
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    // Handler to update the state as the user types in the form
    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    return (
        <div>
            <h2>Update Product</h2>
            <form onSubmit={handleUpdate}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        step="0.01"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Stock:</label>
                    <input
                        type="number"
                        name="stock"
                        value={product.stock}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Update Product</button>
            </form>
        </div>
    );
}

export default UpdateProduct;
