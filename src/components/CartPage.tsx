import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../assets/images/cart-icon.svg';
import ProfileIcon from '../assets/images/profile-icon.svg';
import AddIcon from '../assets/images/add-icon.svg';
import CarrotsImage from '../assets/images/carrots.svg';
import ApplesImage from '../assets/images/apples.svg';
import RiceImage from '../assets/images/rice.svg';

const CartPage: React.FC = () => {
  // Mock cart data
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Organic Carrots', price: 12000, quantity: 2, image: CarrotsImage },
    { id: 2, name: 'Fresh Apples', price: 25000, quantity: 1, image: ApplesImage },
    { id: 3, name: 'Brown Rice', price: 30000, quantity: 1, image: RiceImage },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping for zero plastic delivery
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white py-4 px-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/shop" className="text-darkText">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <div className="text-2xl font-bold text-primary">Green Box</div>
          <div className="flex items-center space-x-4">
            <button className="text-darkText">
              <img src={CartIcon} alt="Cart" className="h-6 w-6" />
            </button>
            <Link to="/profile" className="text-darkText">
              <img src={ProfileIcon} alt="Profile" className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-primary mb-6">Keranjang Belanja</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lightText mb-4">Keranjang Anda kosong</p>
            <Link to="/shop" className="btn-primary inline-block">
              Mulai Belanja
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-soft p-4 flex">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl mr-4" />
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <h3 className="font-bold text-darkText">{item.name}</h3>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-gray-500 hover:text-red-500"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-primary font-bold mt-1">Rp {item.price.toLocaleString()}</p>
                    
                    {/* Quantity Selector */}
                    <div className="flex items-center mt-3">
                      <button 
                        className="w-8 h-8 rounded-full bg-accent text-darkText flex items-center justify-center"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <span className="text-lg font-bold">-</span>
                      </button>
                      <span className="mx-3">{item.quantity}</span>
                      <button 
                        className="w-8 h-8 rounded-full bg-accent text-darkText flex items-center justify-center"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <img src={AddIcon} alt="Add" className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow-soft p-6 mb-6">
              <h2 className="text-xl font-bold text-primary mb-4">Ringkasan Pesanan</h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <p className="text-lightText">Subtotal</p>
                  <p className="text-darkText">Rp {subtotal.toLocaleString()}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-lightText">Ongkos kirim (Zero Plastic Delivery)</p>
                  <p className="text-darkText">Rp {shipping.toLocaleString()}</p>
                </div>
                <div className="flex justify-between font-bold text-lg pt-3 border-t border-gray-200">
                  <p className="text-darkText">Total</p>
                  <p className="text-primary">Rp {total.toLocaleString()}</p>
                </div>
              </div>
              
              <Link to="/checkout" className="btn-primary w-full text-center block">
                Lanjut ke Pembayaran
              </Link>
            </div>
            
            {/* Eco Points Info */}
            <div className="bg-accent rounded-2xl p-4">
              <div className="flex items-center">
                <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-darkText">Dapatkan 120 Eco Points</p>
                  <p className="text-lightText text-sm">Dengan menyelesaikan pesanan ini</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;