import React, { useState, useEffect } from "react";

import image2 from "../../images/12.jpg";

const HeroSection = () => {
  const images = [image2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative w-full h-[500px] font-outfit"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="absolute top-0 left-0 pl-64 w-full h-full bg-black/40 flex items-center text-white px-6">
        <div className="max-w-3xl">
          <h1 className="text-lg md:text-xl font-semibold mb-4">
            KOZZI HOMES
          </h1>
          <p className="text-lg mb-6">
            Welcome to KozziHomes, where every bloom tells a story! Explore our
            stunning collection of fresh, vibrant flowers, thoughtfully arranged
            to bring elegance and charm to every occasion. Whether you're
            celebrating love, friendship, or life’s special milestones, our
            flowers are here to spread joy, beauty, and heartfelt emotions.
            From classic bouquets to unique floral designs, we aim to make
            every moment unforgettable. Let us help you create lasting memories
            with nature’s finest gifts. Together, let’s make your day bloom
            brighter!
          </p>
          <div className="flex gap-4">
            <button className="text-lg bg-secondary hover:bg-red-600 text-third px-6 py-2 rounded">
              Shop Now
            </button>
            <button className="text-lg bg-primary hover:bg-green-600 text-white px-6 py-2 rounded">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
