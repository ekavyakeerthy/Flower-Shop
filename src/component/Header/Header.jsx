import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-pink-100/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold text-pink-700">
          🌸 BloomMart
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-pink-600 transition-colors">Home</Link>
          <Link to="/shop" className="text-gray-700 hover:text-pink-600 transition-colors">Shop</Link>
          <Link to="/about" className="text-gray-700 hover:text-pink-600 transition-colors">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-pink-600 transition-colors">Contact</Link>
          
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative text-gray-700 hover:text-pink-600 transition-colors">
            <ShoppingCart className="w-6 h-6" />
            {/* Cart Item Count */}
            <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs px-1.5 py-0.5 rounded-full">
              2
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-700 hover:text-pink-600 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-pink-50/90 backdrop-blur-lg border-t border-pink-200 shadow-md">
          <nav className="flex flex-col space-y-2 p-4">
            <Link 
              to="/" 
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;