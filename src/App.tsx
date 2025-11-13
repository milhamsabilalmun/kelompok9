import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage.tsx';
import ShopPage from './components/ShopPage.tsx';
import EcoPointPage from './components/EcoPointPage.tsx';
import ProfilePage from './components/ProfilePage.tsx';
import TrackingPage from './components/TrackingPage.tsx';
import ProductDetailPage from './components/ProductDetailPage.tsx';
import CartPage from './components/CartPage.tsx';
import CheckoutPage from './components/CheckoutPage.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><LandingPage /></Layout>} />
      <Route path="/shop" element={<Layout><ShopPage /></Layout>} />
      <Route path="/eco-point" element={<Layout><EcoPointPage /></Layout>} />
      <Route path="/profile" element={<Layout><ProfilePage /></Layout>} />
      <Route path="/tracking" element={<Layout><TrackingPage /></Layout>} />
      <Route path="/product/:id" element={<Layout><ProductDetailPage /></Layout>} />
      <Route path="/cart" element={<Layout><CartPage /></Layout>} />
      <Route path="/checkout" element={<Layout><CheckoutPage /></Layout>} />
    </Routes>
  );
}

export default App;