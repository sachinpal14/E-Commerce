import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
 
import Home from "./src/pages/Home.jsx";
import Shop from "./src/pages/Shop.jsx";
import Grocery from "./src/pages/Grocery.jsx";
import Feedback from "./src/pages/Feedback.jsx";
import Navbar from "./src/components/nav/Navbar.jsx";
import Footer from "./src/components/Footer/Footer.jsx";
 
import Details from "./src/components/Details/Details.jsx";
import { dummydata } from "./src/data.js";
import Cart from "./src/components/cart/Cart.jsx";

const Layout = () => {

  const location = useLocation();
  const hideNavAndFooter = location.pathname === "/login";

  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      <Routes>


        <Route path="/details/:id" element={<Details items={dummydata} />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      {!hideNavAndFooter && <Footer />}
    </>
  );
};

export default Layout;
