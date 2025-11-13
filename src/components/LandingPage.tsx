import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../assets/images/cart-icon.svg';
import ProfileIcon from '../assets/images/profile-icon.svg';
import HeroImage from '../assets/images/hero-image.jpeg';
import ZeroPlasticIcon from '../assets/images/zero-plastic-icon.svg';
import EcoPointIconFeature from '../assets/images/eco-point-feature-icon.svg';
import FreshQualityIcon from '../assets/images/fresh-quality-icon.svg';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white py-4 px-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">Green Box</div>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-darkText font-medium">Home</Link>
            <Link to="/shop" className="text-darkText font-medium">Shop</Link>
            <Link to="/eco-point" className="text-darkText font-medium">Eco-Point</Link>
            <Link to="/profile" className="text-darkText font-medium">Profile</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="text-darkText">
              <img src={CartIcon} alt="Cart" className="h-6 w-6" />
            </Link>
            <Link to="/profile" className="text-darkText">
              <img src={ProfileIcon} alt="Profile" className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Shop without Plastic
            </h1>
            <p className="text-lg text-lightText mb-6">
              Belanja kebutuhan pokok dan produk ramah lingkungan tanpa plastik. Dapatkan poin reward untuk setiap pembelianmu.
            </p>
            <Link to="/shop" className="btn-primary inline-block">
              Shop Now
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-accent rounded-2xl p-8 w-full max-w-md">
              <img src={HeroImage} alt="Green Box Hero" className="w-full h-64 object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-accent py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Kenapa Green Box?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-soft text-center">
              <img src={ZeroPlasticIcon} alt="Zero Plastic" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Zero Plastic</h3>
              <p className="text-lightText">Produk tanpa kemasan plastik dan pengantaran dengan kemasan reusable</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-soft text-center">
              <img src={EcoPointIconFeature} alt="Eco Point" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Eco Point</h3>
              <p className="text-lightText">Dapatkan poin reward untuk setiap pembelian dan tukarkan dengan hadiah menarik</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-soft text-center">
              <img src={FreshQualityIcon} alt="Fresh Quality" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Fresh Quality</h3>
              <p className="text-lightText">Produk segar langsung dari petani lokal dan supplier terpercaya</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;