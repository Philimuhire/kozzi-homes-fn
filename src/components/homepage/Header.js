import React from 'react';

const Header = () => {
  return (
    <header className="bg-green-500 p-4 flex justify-between items-center text-white">
      <div className="font-bold text-xl">KOZZI HOMES</div>
      <nav className="space-x-4">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About Us</a>
        <a href="#" className="hover:underline">Products</a>
        <a href="#" className="hover:underline">Contact Us</a>
      </nav>
      <div className="space-x-4">
        <span className="material-icons">shopping_cart</span>
        <span className="material-icons">favorite</span>
        <span className="material-icons">person</span>
      </div>
    </header>
  );
};

export default Header;
