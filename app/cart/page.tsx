// app/cart/page.tsx
"use client";

import React, { useState } from 'react';
import { useCart } from '../components/CartContext';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateItemQuantity } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    paymentMethod: '',
  });

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCheckout(false);
    // Display delivery note
    alert(`Delivery Note:
    Name: ${userDetails.name}
    Phone: ${userDetails.phone}
    Email: ${userDetails.email}
    Address: ${userDetails.address}
    Payment Method: ${userDetails.paymentMethod}`);
  };

  return (
    <section className="bg-gray-50 px-8 py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-700">Your cart is empty.</p>
        ) : (
          <>
            <div className="flex flex-col gap-4">
              {cartItems.map(item => (
                <div key={item.id} className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-between">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-contain mr-4" />
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-gray-700">Price: Rs. {item.price}</p>
                    <p className="text-gray-700">Weight: {item.weight}</p>
                    <div className="flex items-center">
                      <label className="mr-2">Quantity:</label>
                      <input 
                        type="number" 
                        value={item.quantity} 
                        onChange={(e) => updateItemQuantity(item.id, parseInt(e.target.value))}
                        min="1" 
                        className="w-16 text-center border rounded p-1"
                      />
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="text-right mt-6">
              <p className="text-2xl font-bold">Total Amount: Rs. {totalAmount}</p>
            </div>
            <div className="flex justify-center mt-8">
              <button 
                onClick={handleCheckout} 
                className="bg-blue-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>

      {/* Checkout Form Modal */}
      {showCheckout && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-md mx-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Enter Your Details</h2>
            <p className="text-gray-600 mb-6 text-center">Please fill in your details below to complete the purchase.</p>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                value={userDetails.name} 
                onChange={handleInputChange} 
                className="w-full p-3 border rounded text-gray-700"
                required 
              />
              <input 
                type="text" 
                name="phone" 
                placeholder="Phone Number" 
                value={userDetails.phone} 
                onChange={handleInputChange} 
                className="w-full p-3 border rounded text-gray-700"
                required 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={userDetails.email} 
                onChange={handleInputChange} 
                className="w-full p-3 border rounded text-gray-700"
                required 
              />
              <input 
                type="text" 
                name="address" 
                placeholder="Delivery Address" 
                value={userDetails.address} 
                onChange={handleInputChange} 
                className="w-full p-3 border rounded text-gray-700"
                required 
              />
              <select 
                name="paymentMethod" 
                value={userDetails.paymentMethod} 
                onChange={handleInputChange} 
                className="w-full p-3 border rounded text-gray-700"
                required
              >
                <option value="" disabled>Select Payment Method</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
                <option value="Debit Card">Debit Card</option>
                <option value="Credit Card">Credit Card</option>
              </select>
              <button 
                type="submit" 
                className="bg-green-500 text-white py-3 px-6 rounded w-full font-semibold text-lg hover:bg-green-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default CartPage;
