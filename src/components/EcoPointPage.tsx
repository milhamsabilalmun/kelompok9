import React from 'react';
import CartIcon from '../assets/images/cart-icon.svg';
import ProfileIcon from '../assets/images/profile-icon.svg';

const EcoPointPage: React.FC = () => {
  // Mock data
  const userPoints = 1250;
  const nextRewardPoints = 2000;
  const progress = (userPoints / nextRewardPoints) * 100;
  
  const rewards = [
    { id: 1, name: 'Voucher Rp20.000', points: 1500, claimed: false },
    { id: 2, name: 'Voucher Rp50.000', points: 3000, claimed: false },
    { id: 3, name: 'Gratis Ongkir', points: 500, claimed: true },
    { id: 4, name: 'Voucher Rp100.000', points: 5000, claimed: false },
  ];

  const ecoTips = [
    { id: 1, title: 'Gunakan Tas Belanja Ramah Lingkungan', description: 'Bawa tas belanja reusable saat berbelanja untuk mengurangi penggunaan plastik.' },
    { id: 2, title: 'Pilih Produk Tanpa Kemasan', description: 'Pilih produk yang tidak dikemas dalam plastik untuk mengurangi limbah.' },
    { id: 3, title: 'Daur Ulang dengan Benar', description: 'Pelajari cara mendaur ulang yang benar untuk memastikan limbahmu bisa digunakan kembali.' },
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
            <button className="text-darkText">
              <img src={ProfileIcon} alt="Profile" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Eco Points Header */}
        <div className="bg-accent rounded-2xl p-6 mb-6">
          <h1 className="text-2xl font-bold text-primary mb-2">Eco Points</h1>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-4xl font-bold text-primary">{userPoints}</p>
              <p className="text-lightText">Poin Anda</p>
            </div>
            <div className="text-right">
              <p className="text-lightText">Hadiah berikutnya:</p>
              <p className="text-primary font-bold">{nextRewardPoints} poin</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="w-full bg-white rounded-full h-4">
              <div 
                className="bg-secondary h-4 rounded-full" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-lightText mt-1">
              <span>0</span>
              <span>{nextRewardPoints}</span>
            </div>
          </div>
        </div>

        {/* Rewards Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Hadiah Tersedia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rewards.map((reward) => (
              <div 
                key={reward.id} 
                className={`bg-white rounded-xl shadow-soft p-4 border-2 ${
                  reward.claimed ? 'border-gray-300' : 'border-secondary'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-darkText">{reward.name}</h3>
                    <p className="text-primary font-semibold">{reward.points} poin</p>
                  </div>
                  <button 
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      reward.claimed 
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                        : 'bg-secondary text-white hover:bg-[#257046]'
                    }`}
                    disabled={reward.claimed}
                  >
                    {reward.claimed ? 'Diklaim' : 'Klaim'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Eco Tips Section */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">Tips Ramah Lingkungan</h2>
          <div className="space-y-4">
            {ecoTips.map((tip) => (
              <div key={tip.id} className="bg-white rounded-xl shadow-soft p-4">
                <h3 className="font-bold text-darkText mb-2">{tip.title}</h3>
                <p className="text-lightText">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoPointPage;