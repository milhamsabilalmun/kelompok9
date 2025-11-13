import React from 'react';
import CartIcon from '../assets/images/cart-icon.svg';
import ProfileIcon from '../assets/images/profile-icon.svg';
import TrackingPageIcon from '../assets/images/tracking-page-icon.svg';

const TrackingPage: React.FC = () => {
  // Mock tracking data
  const orderData = {
    id: 'ORD-001',
    status: 'Dikirim',
    estimatedDelivery: '15 Nov 2023',
    courier: 'Green Box Express',
    items: [
      { id: 1, name: 'Organic Carrots', quantity: 2, price: 12000 },
      { id: 2, name: 'Fresh Apples', quantity: 1, price: 25000 },
      { id: 3, name: 'Brown Rice', quantity: 1, price: 30000 },
    ],
  };

  const trackingSteps = [
    { id: 1, title: 'Pesanan Diterima', description: 'Pesanan Anda telah diterima oleh sistem kami', completed: true, active: false },
    { id: 2, title: 'Dalam Proses', description: 'Pesanan Anda sedang diproses', completed: true, active: false },
    { id: 3, title: 'Dikirim', description: 'Pesanan Anda sedang dalam perjalanan', completed: false, active: true },
    { id: 4, title: 'Selesai', description: 'Pesanan Anda telah sampai', completed: false, active: false },
  ];

  const subtotal = orderData.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping for zero plastic delivery
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white py-4 px-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">Green Box</div>
          <div className="flex items-center space-x-4">
            <button className="text-darkText">
              <img src={CartIcon} alt="Cart" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Order Info */}
        <div className="bg-accent rounded-2xl p-6 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-primary">Lacak Pesanan</h1>
              <p className="text-lightText">ID Pesanan: {orderData.id}</p>
            </div>
            <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
              {orderData.status}
            </span>
          </div>
          
          <div className="mt-4 flex items-center">
            <img src={TrackingPageIcon} alt="Courier" className="w-16 h-16 mr-4" />
            <div>
              <p className="font-bold text-darkText">{orderData.courier}</p>
              <p className="text-lightText">Estimasi tiba: {orderData.estimatedDelivery}</p>
            </div>
          </div>
        </div>

        {/* Tracking Steps */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-primary mb-4">Status Pengantaran</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            <div className="space-y-6">
              {trackingSteps.map((step) => (
                <div key={step.id} className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step.completed ? 'bg-secondary text-white' : 
                      step.active ? 'bg-primary text-white' : 
                      'bg-gray-300 text-gray-500'
                    }`}>
                      {step.completed ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <span>{step.id}</span>
                      )}
                    </div>
                  </div>
                  <div className="pb-6">
                    <h3 className={`font-bold ${
                      step.completed || step.active ? 'text-darkText' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`${
                      step.completed || step.active ? 'text-lightText' : 'text-gray-400'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <h2 className="text-xl font-bold text-primary mb-4">Ringkasan Pesanan</h2>
          
          <div className="space-y-4 mb-6">
            {orderData.items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <div>
                  <p className="font-medium text-darkText">{item.name}</p>
                  <p className="text-lightText text-sm">Jumlah: {item.quantity}</p>
                </div>
                <p className="font-medium text-darkText">Rp {(item.price * item.quantity).toLocaleString()}</p>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-200 pt-4 space-y-2">
            <div className="flex justify-between">
              <p className="text-lightText">Subtotal</p>
              <p className="text-darkText">Rp {subtotal.toLocaleString()}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lightText">Ongkos kirim (Zero Plastic Delivery)</p>
              <p className="text-darkText">Rp {shipping.toLocaleString()}</p>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <p className="text-darkText">Total</p>
              <p className="text-primary">Rp {total.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;