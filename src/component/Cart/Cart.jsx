import React, { useState } from "react";

const Cart = () => {
  // Example cart items (you can later connect this with "Add to Cart" button)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Rose Bouquet",
      price: 799,
      quantity: 3,
      image: "rose.jpg",
    },
    {
      id: 2,
      name: "Tulip Bliss",
      price: 999,
      quantity: 2,
      image: "tulip.jpg",
    },
  ]);

  // Increase quantity
  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="bg-gradient-to-b from-white to-pink-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
          Your Shopping Cart 🛒
        </h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600 mt-8">
            Your cart is empty 🌸
          </p>
        ) : (
          <div className="mt-10 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white rounded-2xl shadow-md overflow-hidden p-4"
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 object-cover rounded-xl"
                />

                {/* Product Info */}
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-pink-600 font-medium">₹{item.price}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded-l-lg hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded-r-lg hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 font-semibold ml-4"
                >
                  ✖ Remove
                </button>
              </div>
            ))}

            {/* Total Price Section */}
            <div className="flex justify-between items-center mt-8 border-t pt-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Total: <span className="text-pink-600">₹{totalPrice}</span>
              </h3>
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl shadow-md transition">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;