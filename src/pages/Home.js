import React from 'react';
import Header from '../components/homepage/Header';
import ContactSection from '../components/homepage/ContactSection';
import HeroSection from '../components/homepage/HeroSection';
import Footer from '../components/homepage/Footer';
import PopularProducts from '../components/homepage/PopularProducts';

const Home = () => {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <PopularProducts />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
