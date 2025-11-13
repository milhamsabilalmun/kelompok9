import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../assets/images/cart-icon.svg';
import ProfileIcon from '../assets/images/profile-icon.svg';
import SearchIcon from '../assets/images/search-icon.svg';
import AddIcon from '../assets/images/add-icon.svg';
import CarrotsImage from '../assets/images/carrots.svg';
import ApplesImage from '../assets/images/apples.svg';
import RiceImage from '../assets/images/rice.svg';
import ShampooImage from '../assets/images/shampoo.svg';
import SpinachImage from '../assets/images/spinach.svg';
import BananasImage from '../assets/images/bananas.svg';

const ShopPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock product data
  const products = [
    {
      id: 1,
      name: 'Organic Carrots',
      price: 12000,
      image: CarrotsImage,
      category: 'Vegetables',
    },
    {
      id: 2,
      name: 'Fresh Apples',
      price: 25000,
      image: ApplesImage,
      category: 'Fruits',
    },
    {
      id: 3,
      name: 'Brown Rice',
      price: 30000,
      image: RiceImage,
      category: 'Groceries',
    },
    {
      id: 4,
      name: 'Shampoo Bar',
      price: 45000,
      image: ShampooImage,
      category: 'Personal Care',
    },
    {
      id: 5,
      name: 'Organic Spinach',
      price: 15000,
      image: SpinachImage,
      category: 'Vegetables',
    },
    {
      id: 6,
      name: 'Bananas',
      price: 20000,
      image: BananasImage,
      category: 'Fruits',
    },
  ];

  const categories = [
    { id: 'all', name: 'All', icon: '🛒' },
    { id: 'vegetables', name: 'Vegetables', icon: '🥕' },
    { id: 'fruits', name: 'Fruits', icon: '🍎' },
    { id: 'groceries', name: 'Groceries', icon: '🍞' },
    { id: 'personal-care', name: 'Personal Care', icon: '🧴' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            <Link to="/profile" className="text-darkText">
              <img src={ProfileIcon} alt="Profile" className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="container mx-auto px-4 py-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Cari produk..."
            className="w-full py-3 px-4 pl-12 rounded-full bg-accent border-none focus:outline-none focus:ring-2 focus:ring-secondary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img src={SearchIcon} alt="Search" className="h-5 w-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-2 overflow-x-auto">
        <div className="flex space-x-4 pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`flex flex-col items-center px-4 py-2 rounded-lg whitespace-nowrap ${
                selectedCategory === category.id
                  ? 'bg-secondary text-white'
                  : 'bg-accent text-darkText'
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="text-sm mt-1">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-primary mb-4">Produk Terbaru</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="bg-white rounded-xl shadow-soft overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <div className="p-3">
                <h3 className="font-semibold text-darkText truncate">{product.name}</h3>
                <p className="text-primary font-bold mt-1">Rp {product.price.toLocaleString()}</p>
                <button className="btn-add mt-2">
                  <img src={AddIcon} alt="Add" className="h-5 w-5" />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;