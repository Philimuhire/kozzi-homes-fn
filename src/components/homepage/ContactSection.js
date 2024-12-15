import React from 'react';

const ContactSection = () => {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="flex-1">
          <p className="mb-4">
            If you have an urgent business concern, please contact us at <strong>07********0</strong>.
          </p>
          <p>Visit us on our social media:</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-green-500 text-2xl">F</a>
            <a href="#" className="text-green-500 text-2xl">I</a>
            <a href="#" className="text-green-500 text-2xl">X</a>
            <a href="#" className="text-green-500 text-2xl">L</a>
          </div>
        </div>
        <div className="flex-1">
          <form>
            <input type="text" placeholder="Name" className="block w-full p-2 mb-4 border rounded" />
            <input type="email" placeholder="Your email" className="block w-full p-2 mb-4 border rounded" />
            <textarea placeholder="Message" className="block w-full p-2 mb-4 border rounded"></textarea>
            <button className="bg-green-500 px-6 py-2 text-white rounded">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;