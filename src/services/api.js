// apis.js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api/auth";

export const registerUser = async (userData) => {
  try {
    const res = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!res.ok) throw new Error("Registration failed");
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const res = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!res.ok) throw new Error("Login failed");
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};