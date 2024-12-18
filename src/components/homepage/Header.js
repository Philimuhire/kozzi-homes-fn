import React from 'react';
import logo from '../../images/logo.png';

const Header = () => {

  return (
    <header className="bg-primary text-third shadow-md font-outfit text-lg">
      <div className="container mx-auto px-4 py-4 flex items-center gap-x-36">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-8 sm:h-10 sm:w-10"
          />
          <h1 className="text-xl font-semibold ml-2">KozziHomes</h1>
        </div>

        <nav className="hidden sm:flex space-x-6">
          <a href="#home" className="hover:text-green-600">
            Home
          </a>
          <a href="#about" className="hover:text-green-600">
            About Us
          </a>
          <a href="#products" className="hover:text-green-600">
            Products
          </a>
          <a href="#contact" className="hover:text-green-600">
            Contact Us
          </a>
        </nav>
        </div>
    </header>
  );
};

export default Header;
