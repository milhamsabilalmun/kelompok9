import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '../assets/images/home-icon.svg';
import EcoPointIcon from '../assets/images/eco-point-icon.svg';
import ProfileIcon from '../assets/images/profile-icon.svg';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-white pb-16 md:pb-0">
      {/* Main content */}
      <main>{children}</main>
      
      {/* Bottom Navigation (Mobile) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
        <div className="flex justify-around py-3">
          <Link 
            to="/" 
            className={`flex flex-col items-center ${location.pathname === '/' ? 'text-primary' : 'text-darkText'}`}
          >
            <img src={HomeIcon} alt="Home" className="h-6 w-6" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link 
            to="/eco-point" 
            className={`flex flex-col items-center ${location.pathname === '/eco-point' ? 'text-primary' : 'text-darkText'}`}
          >
            <img src={EcoPointIcon} alt="Eco-Point" className="h-6 w-6" />
            <span className="text-xs mt-1">Eco-Point</span>
          </Link>
          <Link 
            to="/profile" 
            className={`flex flex-col items-center ${location.pathname === '/profile' ? 'text-primary' : 'text-darkText'}`}
          >
            <img src={ProfileIcon} alt="Profile" className="h-6 w-6" />
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Layout;