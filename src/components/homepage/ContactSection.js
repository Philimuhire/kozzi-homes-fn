import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-third text-lg py-12 mx-12 sm:mx-16 md:mx-20 lg:mx-32 font-outfit">
      <h2 className="text-lg md:text-xl font-bold mb-8 text-fifth">
        Contact Us
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 text-fifth">
          <div className="flex items-start gap-3 mb-4">
            <div className="text-fifth">
              <i className="fa fa-phone-alt text-lg"></i>
            </div>
            <p className="text-lg">
              Have a question or need assistance selecting the perfect blooms? 
              Our team is here to help! For urgent inquiries, feel free to reach out to us directly at <strong>0786084658</strong>. 
              We’re just a call away to ensure your floral needs are met promptly and beautifully. <br /><br />
              Stay connected with us! 
              Visit us on our social media platforms to explore more of our beautiful flowers and stay updated. 
              Click the icons below to follow us.
            </p>
          </div>

          <p className="text-lg font-semibold text-fifth mt-12 mb-2 text-center">
            Visit us on our social media
          </p>

          <div className="flex gap-4 mt-4 justify-center">
            <a
              href="#"
              className="text-primary text-2xl hover:text-green-700 transition"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="text-primary text-2xl hover:text-green-700 transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-primary text-2xl hover:text-green-700 transition"
            >
              <i className="fab fa-x-twitter"></i>
            </a>
            <a
              href="#"
              className="text-primary text-2xl hover:text-green-700 transition"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="flex-1 p-6 md:p-8 rounded-lg shadow-md">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-lg text-fifth font-medium mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full border rounded-md px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg text-fifth font-medium mb-1"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                className="w-full border rounded-md px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg text-fifth font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your message"
                className="w-full border rounded-md px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-lg text-third py-2 px-4 rounded-md hover:bg-green-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
