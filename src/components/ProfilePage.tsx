import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../assets/images/cart-icon.svg';
import AvatarImage from '../assets/images/avatar.svg';

const ProfilePage: React.FC = () => {
  // Mock user data
  const user = {
    name: 'Labib',
    email: 'Labib@example.com',
    phone: '081234567890',
    memberSince: 'Januari 2023',
    ecoPoints: 1250,
  };

  const orders = [
    { id: 'ORD-001', date: '12 Nov 2023', status: 'Dikirim', total: 125000 },
    { id: 'ORD-002', date: '5 Nov 2023', status: 'Selesai', total: 89000 },
    { id: 'ORD-003', date: '28 Okt 2023', status: 'Dibatalkan', total: 156000 },
  ];

  const menuItems = [
    { id: 1, title: 'Alamat Pengiriman', icon: '📍' },
    { id: 2, title: 'Metode Pembayaran', icon: '💳' },
    { id: 3, title: 'Notifikasi', icon: '🔔' },
    { id: 4, title: 'Bantuan', icon: '❓' },
    { id: 5, title: 'Keluar', icon: '🚪' },
  ];

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
        {/* Profile Header */}
        <div className="bg-accent rounded-2xl p-6 mb-6">
          <div className="flex items-center">
            <img src={AvatarImage} alt="Avatar" className="w-16 h-16 rounded-full" />
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-primary">{user.name}</h1>
              <p className="text-lightText">{user.email}</p>
              <div className="flex items-center mt-1">
                <span className="text-primary font-semibold">{user.ecoPoints} Eco Points</span>
              </div>
            </div>
          </div>
        </div>

        {/* Order History */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Riwayat Pesanan</h2>
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-xl shadow-soft p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-darkText">{order.id}</h3>
                    <p className="text-lightText text-sm">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-darkText">Rp {order.total.toLocaleString()}</p>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      order.status === 'Selesai' ? 'bg-green-100 text-green-800' :
                      order.status === 'Dikirim' ? 'bg-blue-100 text-blue-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
                <Link to="/tracking" className="mt-3 w-full py-2 text-center text-secondary font-semibold border border-secondary rounded-lg hover:bg-secondary hover:text-white transition-colors block">
                  Lacak Pesanan
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Menu */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">Pengaturan</h2>
          <div className="space-y-3">
            {menuItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-xl shadow-soft p-4 flex items-center"
              >
                <span className="text-2xl mr-3">{item.icon}</span>
                <span className="font-medium text-darkText">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;