import React, { useState } from "react";
import { registerUser } from "../services/api";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await registerUser(formData);
    if (data.user) {
      setMessage("Registered successfully! Now login.");
    } else {
      setMessage("Registration failed!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="border p-2 rounded w-full mb-3"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded w-full mb-3"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded w-full mb-3"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <button
            type="submit"
            className="bg-pink-500 text-white w-full p-2 rounded hover:bg-pink-600"
          >
            Register
          </button>
        </form>
        {message && <p className="text-center mt-3">{message}</p>}
      </div>
    </div>
  );
};

export default Register;