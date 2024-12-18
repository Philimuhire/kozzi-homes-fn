import React from "react";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary font-outfit text-base md:text-xl text-third pt-8">
      <div className="container mx-auto px-4 md:px-8 border-b border-border pb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="footer-description mr-0 md:mr-32">
            <div className="text-lg font-bold mb-6">
              <img src={logo} alt="KozziHomes Logo" className="h-12" />
            </div>
            <p className="font-outfit font-[300]">
            Thank you for visiting KozziHomes, your go-to destination for beautiful, fresh flowers. 
            We are dedicated to bringing nature’s beauty to your home, one bloom at a time. For any inquiries 
            or assistance, feel free to reach out to us. Stay connected and follow us on social media for 
            the latest updates and floral inspiration!
            </p>
          </div>
          <div className="footer-links max-w-full md:max-w-md">
            <p className="mb-4 md:mb-10 font-bold">Quick Links</p>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <a href="/" className="text-white hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-white hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="text-white hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#ContactSection" className="text-white hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <p className="mb-4 md:mb-10 font-bold">Contact</p>
            <p>Tel: 0786084658</p>
            <p>
              Email:{" "}
              <a
                href="mailto:team.crafters@gmail.com"
                className="text-white hover:underline"
              >
                mutonipatience58@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-primary text-center py-4 md:py-8">
        <p>&copy; 2024 KozziHomes. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
