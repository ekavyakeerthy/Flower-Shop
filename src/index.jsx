import "./style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Rowter, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import HeroSection from "./component/HeroSection/HeroSection";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Shop from "./component/Shop/Shop";
import ProductDetails from "./component/ProductDetails/ProductDetails";
import Cart from "./component/Cart/Cart";
import Footer from "./component/Footer/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";

const AppLayout = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
{
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/footer",
    element: <Footer />,
  },
{
    path: "/productdetails/:id",
    element: <ProductDetails />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default AppLayout;