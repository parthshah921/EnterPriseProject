import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OrderList.css'; // Import your custom CSS for styling

function OrderList() {
    const [orders, setOrders] = useState([]);
    const [productId, setProductId] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        // Fetch orders data from the backend server
        axios.get('http://127.0.0.1:9090/orders')
            .then(response => {
                // Set the fetched data to the orders state
                setOrders(response.data);
            })
            .catch(error => {
                // Handle errors
                console.error('Error fetching orders:', error);
            });
    }, []);

    const handleAddOrder = async (event) => {
        event.preventDefault();
        const newOrder = {
            productId: parseInt(productId, 10),
            quantity: parseInt(quantity, 10),
            totalPrice: parseFloat(price)
        };

        try {
            // Send POST request to add a new order
            const response = await axios.post('http://127.0.0.1:9090/orders', newOrder);
            console.log('Order added:', response.data);

            // Optionally, fetch the updated list of orders
            const updatedOrders = await axios.get('http://127.0.0.1:9090/orders');
            setOrders(updatedOrders.data);

            // Clear form fields
            setProductId('');
            setQuantity('');
            setPrice('');
        } catch (error) {
            console.error('Error adding order:', error);
        }
    };

    return (
        <div>
            <h2>Orders</h2>
            {/* Orders Table */}
            <table className="order-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Order Date</th>
                        <th>Total Price</th>
                        <th>Product ID</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{new Date(order.orderDate).toLocaleString()}</td>
                            <td>${order.totalPrice.toFixed(2)}</td>
                            <td>{order.productId}</td>
                            <td>{order.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Add Order Form */}
            <h3>Add Order</h3>
            <form onSubmit={handleAddOrder} className="add-order-form">
                <div className="form-group">
                    <label>Product ID:</label>
                    <input
                        type="number"
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Quantity:</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Total Price:</label>
                    <input
                        type="number"
                        step="0.01"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Order</button>
            </form>
        </div>
    );
}

export default OrderList;
