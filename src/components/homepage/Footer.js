import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-500 text-white p-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p>
          There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration.
        </p>
        <div className="text-sm mt-4 md:mt-0">©2024 KozziHomes, all rights reserved</div>
        <div className="mt-4 md:mt-0">
          <p>Contact</p>
          <p>Tel: 07********0</p>
          <p>Email: team.crafters@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
