import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-center lg:gap-12">
        
        {/* Left Image */}
        <div className="lg:w-1/2">
          <img
            src="/flowershop.jpg" // Place your image in public folder → public/flower-shop.jpg
            alt="Flower Shop"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            About Our Flower Shop
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold text-pink-600">Bloom & Blossom</span>, 
            we believe flowers speak the language of love, joy, and celebration 🌸.  
            Every bouquet we create is more than just flowers — it’s a heartfelt story of emotions, 
            colors, and timeless beauty.  
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our handpicked blooms are carefully arranged to brighten your special moments — 
            whether it’s birthdays, weddings, or simply adding a touch of elegance to everyday life.  
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With a passion for freshness and creativity, our dedicated team ensures 
            every arrangement is unique, memorable, and crafted to leave a lasting impression ✨.  
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;