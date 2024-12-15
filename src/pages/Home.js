import React from 'react';
import Header from '../components/homepage/Header';
import HeroSection from '../components/homepage/HeroSection';
import PopularProducts from '../components/homepage/PopularProducts';
import ContactSection from '../components/homepage/ContactSection';
import Footer from '../components/homepage/Footer';

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
