import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Simulated API data (should match Shop.jsx)
const mockProducts = [
    { id: 1, name: "Rose Bouquet", price: 799, image: "rose.jpg", description: "A beautiful bouquet of fresh roses." },
    { id: 2, name: "Tulip Bliss", price: 999, image: "tulip.jpg", description: "Bright and cheerful tulip arrangement." },
    { id: 3, name: "Sunflower Bie", price: 899, image: "sunflower.jpg", description: "Sunny sunflowers to brighten your day." },
    { id: 4, name: "Cherry Blossom", price: 849, image: "cherry.jpg", description: "Delicate cherry blossoms for elegance." },
    { id: 5, name: "Lily love", price: 745, image: "lily.jpg", description: "Elegant lilies for any occasion." },
    { id: 6, name: "Orchid Elegance", price: 699, image: "orchids.jpg", description: "Exquisite orchids for a touch of class." },
    { id: 7, name: "Hibiscus Charm", price: 649, image: "hibiscus.jpg", description: "Charming hibiscus bouquet." },
    { id: 8, name: "Carnation Delight", price: 745, image: "carnation.jpg", description: "Delightful carnations in full bloom." },
    { id: 9, name: "Marguerite Daisy", price: 799, image: "margueritedaisy.jpg", description: "Fresh marguerite daisies." },
    { id: 10, name: "Iris Fantasy", price: 899, image: "iris.jpg", description: "Fantasy iris bouquet." },
    { id: 11, name: "Sweet Pea", price: 799, image: "sweetpea.jpg", description: "Sweet pea arrangement." },
    { id: 12, name: "Gerbera Joy", price: 999, image: "gerbera.jpg", description: "Joyful gerbera daisies." },
];

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    // Simulate API call
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            const found = mockProducts.find((p) => p.id === Number(id));
            setProduct(found);
            setLoading(false);
        }, 500); // Simulate network delay
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-96">
                <span className="text-pink-500 text-xl">Loading...</span>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="text-center mt-20">
                <h2 className="text-2xl font-bold text-red-500">Product not found</h2>
                <button
                    className="mt-4 px-4 py-2 bg-pink-500 text-white rounded"
                    onClick={() => navigate(-1)}
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <section className="flex flex-col items-center py-16 bg-gradient-to-b from-white to-pink-50 min-h-screen">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full">
                <img
                    src={`/${product.image}`} // Image from public folder
                    alt={product.name}
                    className="w-full h-72 object-cover rounded-xl mb-6"
                />
                <h2 className="text-3xl font-bold text-pink-600 mb-2">{product.name}</h2>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <p className="text-xl font-semibold text-gray-800 mb-6">₹{product.price}</p>
                <button
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 rounded-xl shadow-md transition"
                    onClick={() => navigate("/cart")} // <-- Add this line
                >
                    Add to Cart
                </button>

                <button
                    className="mt-4 w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 rounded-xl transition"
                    onClick={() => navigate(-1)}
                >
                    Buy Now

                </button>
            </div>
        </section>
    );
};

export default ProductDetails;