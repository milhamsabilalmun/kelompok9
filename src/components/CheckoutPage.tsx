import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../assets/images/cart-icon.svg';
import ProfileIcon from '../assets/images/profile-icon.svg';

const CheckoutPage: React.FC = () => {
  // Mock checkout data
  const cartItems = [
    { id: 1, name: 'Organic Carrots', price: 12000, quantity: 2 },
    { id: 2, name: 'Fresh Apples', price: 25000, quantity: 1 },
    { id: 3, name: 'Brown Rice', price: 30000, quantity: 1 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping for zero plastic delivery
  const total = subtotal + shipping;

  // Form states
  const [formData, setFormData] = useState({
    fullName: 'Budi Santoso',
    email: 'budi.santoso@example.com',
    phone: '081234567890',
    address: 'Jl. Sudirman No. 123',
    city: 'Jakarta',
    postalCode: '12345',
    deliveryOption: 'zero-plastic',
    paymentMethod: 'cod',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the order
    alert('Pesanan berhasil dibuat!');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white py-4 px-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/cart" className="text-darkText">
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
        <h1 className="text-2xl font-bold text-primary mb-6">Checkout</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - Shipping & Payment */}
            <div>
              {/* Shipping Information */}
              <div className="bg-white rounded-xl shadow-soft p-6 mb-6">
                <h2 className="text-xl font-bold text-primary mb-4">Alamat Pengiriman</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-lightText text-sm mb-1">Nama Lengkap</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-lightText text-sm mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-lightText text-sm mb-1">Nomor Telepon</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-lightText text-sm mb-1">Alamat</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-lightText text-sm mb-1">Kota</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-lightText text-sm mb-1">Kode Pos</label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Delivery Options */}
              <div className="bg-white rounded-xl shadow-soft p-6 mb-6">
                <h2 className="text-xl font-bold text-primary mb-4">Opsi Pengiriman</h2>
                
                <div className="space-y-3">
                  <label className="flex items-center p-4 border border-secondary rounded-lg cursor-pointer">
                    <input
                      type="radio"
                      name="deliveryOption"
                      value="zero-plastic"
                      checked={formData.deliveryOption === 'zero-plastic'}
                      onChange={handleInputChange}
                      className="h-5 w-5 text-secondary focus:ring-secondary"
                    />
                    <div className="ml-4">
                      <div className="font-bold text-darkText">Zero Plastic Delivery</div>
                      <div className="text-lightText text-sm">Pengantaran dengan kemasan ramah lingkungan yang dapat digunakan kembali</div>
                      <div className="text-primary font-semibold mt-1">Gratis</div>
                    </div>
                  </label>
                  
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer">
                    <input
                      type="radio"
                      name="deliveryOption"
                      value="standard"
                      checked={formData.deliveryOption === 'standard'}
                      onChange={handleInputChange}
                      className="h-5 w-5 text-secondary focus:ring-secondary"
                    />
                    <div className="ml-4">
                      <div className="font-bold text-darkText">Pengiriman Standar</div>
                      <div className="text-lightText text-sm">Pengantaran reguler dengan estimasi 2-3 hari kerja</div>
                      <div className="text-darkText font-semibold mt-1">Rp 15.000</div>
                    </div>
                  </label>
                </div>
              </div>
              
              {/* Payment Method */}
              <div className="bg-white rounded-xl shadow-soft p-6">
                <h2 className="text-xl font-bold text-primary mb-4">Metode Pembayaran</h2>
                
                <div className="space-y-3">
                  <label className="flex items-center p-4 border border-secondary rounded-lg cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleInputChange}
                      className="h-5 w-5 text-secondary focus:ring-secondary"
                    />
                    <div className="ml-4">
                      <div className="font-bold text-darkText">Bayar di Tempat (COD)</div>
                      <div className="text-lightText text-sm">Bayar langsung kepada kurir saat barang diterima</div>
                    </div>
                  </label>
                  
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank-transfer"
                      checked={formData.paymentMethod === 'bank-transfer'}
                      onChange={handleInputChange}
                      className="h-5 w-5 text-secondary focus:ring-secondary"
                    />
                    <div className="ml-4">
                      <div className="font-bold text-darkText">Transfer Bank</div>
                      <div className="text-lightText text-sm">Transfer ke rekening bank kami</div>
                    </div>
                  </label>
                  
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="e-wallet"
                      checked={formData.paymentMethod === 'e-wallet'}
                      onChange={handleInputChange}
                      className="h-5 w-5 text-secondary focus:ring-secondary"
                    />
                    <div className="ml-4">
                      <div className="font-bold text-darkText">E-Wallet</div>
                      <div className="text-lightText text-sm">Bayar dengan e-wallet (OVO, GoPay, DANA, dll)</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            
            {/* Right Column - Order Summary */}
            <div>
              <div className="bg-white rounded-xl shadow-soft p-6 sticky top-6">
                <h2 className="text-xl font-bold text-primary mb-4">Ringkasan Pesanan</h2>
                
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <div>
                        <p className="font-medium text-darkText">{item.name}</p>
                        <p className="text-lightText text-sm">Jumlah: {item.quantity}</p>
                      </div>
                      <p className="font-medium text-darkText">Rp {(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 pt-4 space-y-2 mb-6">
                  <div className="flex justify-between">
                    <p className="text-lightText">Subtotal</p>
                    <p className="text-darkText">Rp {subtotal.toLocaleString()}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-lightText">Ongkos kirim</p>
                    <p className="text-darkText">Rp {shipping.toLocaleString()}</p>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <p className="text-darkText">Total</p>
                    <p className="text-primary">Rp {total.toLocaleString()}</p>
                  </div>
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Konfirmasi Pesanan
                </button>
                
                {/* Eco Points Info */}
                <div className="bg-accent rounded-2xl p-4 mt-6">
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
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;