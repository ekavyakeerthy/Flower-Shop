import React from "react";

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-pink-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Title */}
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
          Get in Touch 🌷
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Have questions, custom bouquet requests, or just want to share some love?  
          We’d love to hear from you! Fill out the form below and our friendly team 
          will get back to you soon.
        </p>

        {/* Contact Form */}
        <div className="mt-12 max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-left text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-2 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-pink-400 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-left text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-2 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-pink-400 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-left text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="mt-2 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-pink-400 focus:outline-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl shadow-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Extra Info */}
        <div className="mt-10 text-gray-600">
          <p>📍 Visit us at: <span className="font-semibold">Bloom & Blossom, Chennai</span></p>
          <p>📞 Call us: <span className="font-semibold">+91 98765 43210</span></p>
          <p>✉ Email: <span className="font-semibold">bloommart@gmail.com</span></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;