"use client";

import React, { useState } from 'react';
import { useCart } from '../components/CartContext';
import { useRouter } from 'next/navigation';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  weight: string;
}

const ShopPage: React.FC = () => {
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({
    product1: 1,
    product2: 1,
    product3: 1,
  });
  const [showPrompt, setShowPrompt] = useState(false); // State to control prompt visibility
  const router = useRouter();

  const handleQuantityChange = (product: string, value: number) => {
    setQuantities({ ...quantities, [product]: value });
  };

  const handleAddToCart = (item: CartItem) => {
    addToCart(item);
    setShowPrompt(true); // Show the prompt after adding to cart
  };

  const handleContinueShopping = () => {
    setShowPrompt(false);
    router.push('/shop'); // Navigate back to Shop page
  };

  const handleCheckOut = () => {
    setShowPrompt(false);
    router.push('/cart'); // Navigate to Cart page
  };

  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Our Featured Products</h1>
        <div className="flex flex-wrap justify-center gap-3">
          {/* Product Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center" style={{ height: '380px' }}>
            <img
              loading="lazy"
              src="/images/TaqwaSteam.png"
              alt="Taqwa Steam Extraordinary Long Grain"
              className="w-56 h-56 object-contain mb-2"
            />
            <h3 className="text-xl font-bold mb-2 text-center">Taqwa Steam Extraordinary Long Grain</h3>
            <div className="flex justify-between items-center w-full px-2 mb-2 text-sm">
              <p className="text-gray-700">Price: Rs. 2500</p>
              <p className="text-gray-700">Weight: 5 Kg</p>
              <div className="flex items-center">
                <label className="mr-2">Qty:</label>
                <input
                  type="number"
                  value={quantities.product1}
                  onChange={(e) => handleQuantityChange('product1', parseInt(e.target.value))}
                  min="1"
                  className="w-12 text-center border rounded p-1"
                  aria-label="Quantity for Taqwa Steam Extraordinary Long Grain"
                />
              </div>
            </div>
            <button
              className="bg-black text-white py-2 px-4 rounded hover:bg-red-700 mt-auto"
              role="button"
              aria-label="Add Taqwa Steam Extraordinary Long Grain to cart"
              onClick={() =>
                handleAddToCart({
                  id: 'product1',
                  name: 'Taqwa Steam Extraordinary Long Grain',
                  price: 2500,
                  quantity: quantities.product1,
                  image: '/images/TaqwaSteam.png',
                  weight: '5 Kg',
                })
              }
            >
              Add to Cart
            </button>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center" style={{ height: '380px' }}>
            <img
              loading="lazy"
              src="/images/TaqwaSella.png"
              alt="Taqwa Sella Basmati Rice"
              className="w-56 h-56 object-contain mb-2"
            />
            <h3 className="text-xl font-bold mb-2 text-center">Taqwa Parboiled (Sella) Basmati Rice</h3>
            <div className="flex justify-between items-center w-full px-2 mb-2 text-sm">
              <p className="text-gray-700">Price: Rs. 2000</p>
              <p className="text-gray-700">Weight: 5 Kg</p>
              <div className="flex items-center">
                <label className="mr-2">Qty:</label>
                <input
                  type="number"
                  value={quantities.product2}
                  onChange={(e) => handleQuantityChange('product2', parseInt(e.target.value))}
                  min="1"
                  className="w-12 text-center border rounded p-1"
                  aria-label="Quantity for Taqwa Parboiled (Sella) Basmati Rice"
                />
              </div>
            </div>
            <button
              className="bg-black text-white py-2 px-4 rounded hover:bg-red-700 mt-auto"
              role="button"
              aria-label="Add Taqwa Parboiled (Sella) Basmati Rice to cart"
              onClick={() =>
                handleAddToCart({
                  id: 'product2',
                  name: 'Taqwa Parboiled (Sella) Basmati Rice',
                  price: 2000,
                  quantity: quantities.product2,
                  image: '/images/TaqwaSella.png',
                  weight: '5 Kg',
                })
              }
            >
              Add to Cart
            </button>
          </div>

          {/* Product Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center" style={{ height: '380px' }}>
            <img
              loading="lazy"
              src="/images/Super.png"
              alt="IQBAL Super Kernal Basmati Rice"
              className="w-56 h-56 object-contain mb-2"
            />
            <h3 className="text-xl font-bold mb-2 text-center">IQBAL Super Kernal Basmati Rice</h3>
            <div className="flex justify-between items-center w-full px-2 mb-2 text-sm">
              <p className="text-gray-700">Price: Rs. 2000</p>
              <p className="text-gray-700">Weight: 5 Kg</p>
              <div className="flex items-center">
                <label className="mr-2">Qty:</label>
                <input
                  type="number"
                  value={quantities.product3}
                  onChange={(e) => handleQuantityChange('product3', parseInt(e.target.value))}
                  min="1"
                  className="w-12 text-center border rounded p-1"
                  aria-label="Quantity for IQBAL Super Kernal Basmati Rice"
                />
              </div>
            </div>
            <button
              className="bg-black text-white py-2 px-4 rounded hover:bg-red-700 mt-auto"
              role="button"
              aria-label="Add IQBAL Super Kernal Basmati Rice to cart"
              onClick={() =>
                handleAddToCart({
                  id: 'product3',
                  name: 'IQBAL Super Kernal Basmati Rice',
                  price: 2000,
                  quantity: quantities.product3,
                  image: '/images/Super.png',
                  weight: '5 Kg',
                })
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Modal/Prompt for Adding to Cart */}
      {showPrompt && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4">Item Added to Cart!</h2>
            <p className="text-lg mb-6">Your item has been successfully added to the cart.</p>
            <div className="flex justify-between">
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                onClick={handleCheckOut}
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ShopPage;
