import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialProducts = [
  {
    id: 1,
    name: "Rose Bouquet",
    price: 799,
    image: "rose.jpg",
  },
  {
    id: 2,
    name: "Tulip Bliss",
    price: 999,
    image: "tulip.jpg",
  },
  {
    id: 3,
    name: "Sunflower Bie",
    price: 899,
    image: "sunflower.jpg",
  },
  {
    id: 4,
    name: "Cherry Blossom",
    price: 849,
    image: "cherry.jpg",
  },
  {
    id: 5,
    name: "Lily love",
    price: 745,
    image: "lily.jpg",
  },
  {
    id: 6,
    name: "Orchid Elegance",
    price: 699,
    image: "orchids.jpg",
  },
  {
    id: 7,
    name: "Hibiscus Charm",
    price: 649,
    image: "hibiscus.jpg",
  },
  {
    id: 8,
    name: "Carnation Delight",
    price: 745,
    image: "carnation.jpg",
  },
  {
    id: 9,
    name: "Marguerite Daisy",
    price: 799,
    image: "margueritedaisy.jpg",
  },
  {
    id: 10,
    name: "Iris Fantasy",
    price: 899,
    image: "iris.jpg",
  },
  {
    id: 11,
    name: "Sweet Pea",
    price: 799,
    image: "sweetpea.jpg",
  },
  {
    id: 12,
    name: "Gerbera Joy",
    price: 999,
    image: "gerbera.jpg",
  },
];

const Shop = () => {
  const [products, setProducts] = useState(initialProducts);
  const [sortOption, setSortOption] = useState("");
  const navigate = useNavigate();

  // Sorting logic
  const handleSort = (option) => {
    setSortOption(option);

    let sortedProducts = [...products];
    if (option === "priceLowHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "priceHighLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (option === "nameAZ") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === "nameZA") {
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    }
    setProducts(sortedProducts);
  };

  return (
    <section className="bg-gradient-to-b from-white to-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Title */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
            🌸 Our Flower Collection
          </h2>

          {/* Sorting Dropdown */}
          <select
            value={sortOption}
            onChange={(e) => handleSort(e.target.value)}
            className="border rounded-lg px-4 py-2 shadow-sm focus:ring-pink-400 focus:border-pink-400"
          >
            <option value="">Sort by</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="nameAZ">Name: A to Z</option>
            <option value="nameZA">Name: Z to A</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="mt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={`/${item.image}`} // Image from public folder
                alt={item.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="mt-1 text-pink-600 font-medium">₹{item.price}</p>
                <button
                  className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 rounded-xl shadow-md transition"
                  onClick={() => navigate(`/productdetails/${item.id}`)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;