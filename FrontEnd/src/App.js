import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddProduct from './Admin/AddProduct';
import UpdateProduct from './Admin/UpdateProduct';
import DeleteProduct from './Admin/DeleteProduct';
import UploadImage from './ImageService/UploadImage';
import GetImage from './ImageService/GetImage';
import DeleteImage from './ImageService/DeleteImage';
import ProductList from './components/ProductList';
import OrderList from './components/OrderList';
import Cart from './Cart';

function App() {
  // State to hold the cart items
  const [cart, setCart] = useState([]);

  // Handler to add a product to the cart
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  // Handler to remove a product from the cart
  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        <nav style={{ backgroundColor: '#333', padding: '10px', marginBottom: '20px' }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ display: 'inline', marginRight: '10px' }}><Link to="/admin/products/add" style={{ color: '#fff', textDecoration: 'none' }}>Add Product</Link></li>
            {/* <li style={{ display: 'inline', marginRight: '10px' }}><Link to="/admin/products/update/:id" style={{ color: '#fff', textDecoration: 'none' }}>Update Product</Link></li>
            <li style={{ display: 'inline', marginRight: '10px' }}><Link to="/admin/products/delete" style={{ color: '#fff', textDecoration: 'none' }}>Delete Product</Link></li> */}
            <li style={{ display: 'inline', marginRight: '10px' }}><Link to="/images/upload" style={{ color: '#fff', textDecoration: 'none' }}>Upload Image</Link></li>
            {/* <li style={{ display: 'inline', marginRight: '10px' }}><Link to="/images/view/:imageId" style={{ color: '#fff', textDecoration: 'none' }}>View Image</Link></li> */}
            {/* <li style={{ display: 'inline', marginRight: '10px' }}><Link to="/images/delete/:imageId" style={{ color: '#fff', textDecoration: 'none' }}>Delete Image</Link></li> */}
            <li style={{ display: 'inline', marginRight: '10px' }}><Link to="/products" style={{ color: '#fff', textDecoration: 'none' }}>Product List</Link></li>
            <li style={{ display: 'inline', marginRight: '10px' }}><Link to="/orders" style={{ color: '#fff', textDecoration: 'none' }}>Order List</Link></li>
            <li style={{ display: 'inline', marginRight: '10px' }}><Link to="/cart" style={{ color: '#fff', textDecoration: 'none' }}>Cart</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/admin/products/add" element={<AddProduct />} />
          <Route path="/admin/products/update/:id" element={<UpdateProduct />} />
          <Route path="/admin/products/delete" element={<DeleteProduct />} />
          <Route path="/images/upload" element={<UploadImage />} />
          {/* <Route path="/images/view/:imageId" element={<GetImage />} /> */}
          {/* <Route path="/images/delete/:imageId" element={<DeleteImage />} /> */}
          <Route path="/products" element={<ProductList onAddToCart={handleAddToCart} />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/cart" element={<Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
