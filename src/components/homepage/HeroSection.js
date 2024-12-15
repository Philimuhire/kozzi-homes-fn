import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="h-[400px] bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
    >
      <h1 className="text-4xl font-bold mb-4">KOZZI HOMES</h1>
      <p className="mb-6 text-center max-w-md">
        Ndustry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.
      </p>
      <div className="space-x-4">
        <button className="bg-red-500 px-6 py-2 rounded-full text-white font-bold">Shop Now</button>
        <button className="bg-green-500 px-6 py-2 rounded-full text-white font-bold">Contact Us</button>
      </div>
    </section>
  );
};

export default HeroSection;
