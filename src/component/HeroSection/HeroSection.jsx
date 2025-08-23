import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="relative bg-pink-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 py-16 lg:flex lg:items-center lg:justify-between">

                {/* Left Content */}
                <div className="max-w-xl space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Fresh Flowers, <span className="text-pink-600">Delivered to You</span>
                    </h1>
                    <p className="text-lg text-gray-600">
                        🌷 Discover the beauty of hand-picked blooms — perfect for every occasion.
                        💐 Each bouquet is carefully curated to bring joy, love, and elegance into your moments.
                        🌸 From birthdays to weddings, or just to brighten a day, our flowers speak the language of the heart.
                    </p>

                    <div className="flex space-x-4">
                        <Link
                            to="/shop"
                            className="px-6 py-3 bg-pink-600 text-white font-medium rounded-full shadow-md hover:bg-pink-700 transition"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="mt-10 lg:mt-0 lg:ml-10">
                    <img
                        src="/flowers.jpg"
                        alt="Flower Bouquet"
                        className="rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;