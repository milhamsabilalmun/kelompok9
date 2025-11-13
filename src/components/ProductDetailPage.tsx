import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../assets/images/cart-icon.svg';
import ProfileIcon from '../assets/images/profile-icon.svg';
import ProductDetailPlaceholder from '../assets/images/product-detail-placeholder.svg';
import AddIcon from '../assets/images/add-icon.svg';

const ProductDetailPage: React.FC = () => {
  // Mock product data
  const product = {
    id: 1,
    name: 'Organic Carrots',
    price: 12000,
    description: 'Wortel organik segar dari petani lokal. Ditanam tanpa pestisida dan bahan kimia berbahaya. Kaya akan vitamin A dan serat.',
    packaging: 'Kertas daur ulang',
    stock: 15,
    images: [
      ProductDetailPlaceholder,
      ProductDetailPlaceholder,
      ProductDetailPlaceholder,
    ],
  };

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

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
        {/* Product Images */}
        <div className="mb-6">
          <img src={product.images[selectedImage]} alt={product.name} className="w-full h-80 object-cover rounded-xl mb-4" />
          <div className="flex space-x-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <img 
                src={image} 
                alt={`Thumbnail ${index + 1}`} 
                className={`w-20 h-20 object-cover rounded-xl flex-shrink-0 cursor-pointer ${
                  selectedImage === index ? 'border-2 border-secondary' : 'border border-gray-300'
                }`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-darkText mb-2">{product.name}</h1>
          <p className="text-2xl font-bold text-primary mb-4">Rp {product.price.toLocaleString()}</p>
          
          <div className="flex items-center mb-4">
            <span className="text-lightText mr-2">Kemasan:</span>
            <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-semibold">
              {product.packaging}
            </span>
          </div>
          
          <div className="flex items-center mb-6">
            <span className="text-lightText mr-2">Stok:</span>
            <span className="text-darkText font-semibold">{product.stock} tersedia</span>
          </div>
          
          <p className="text-lightText mb-6">{product.description}</p>
          
          {/* Quantity Selector */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-darkText font-semibold">Jumlah:</span>
            <div className="flex items-center">
              <button 
                className="w-10 h-10 rounded-full bg-accent text-darkText flex items-center justify-center"
                onClick={decrementQuantity}
              >
                <span className="text-xl font-bold">-</span>
              </button>
              <span className="mx-4 text-lg font-semibold">{quantity}</span>
              <button 
                className="w-10 h-10 rounded-full bg-accent text-darkText flex items-center justify-center"
                onClick={incrementQuantity}
                disabled={quantity >= product.stock}
              >
                <img src={AddIcon} alt="Add" className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <button className="btn-primary w-full">
            Tambah ke Keranjang
          </button>
        </div>
        
        {/* Eco Points Info */}
        <div className="bg-accent rounded-2xl p-4 mb-6">
          <div className="flex items-center">
            <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-darkText">Dapatkan 50 Eco Points</p>
              <p className="text-lightText text-sm">Dengan setiap pembelian produk ramah lingkungan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;