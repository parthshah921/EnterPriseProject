import React from 'react';

function Cart({ cart, onRemoveFromCart }) {
    return (
        <div>
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map(item => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>Price: ${item.price}</p>
                        <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
                    </div>
                ))
            )}
        </div>
    );
}

export default Cart;
