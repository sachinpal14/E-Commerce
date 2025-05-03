import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./src/pages/Login";
import Home from "./src/pages/Home";
import Shop from "./src/pages/Shop";
import Grocery from "./src/pages/Grocery";
import Feedback from "./src/pages/Feedback";
import Navbar from "./src/components/nav/Navbar";
import Footer from "./src/components/Footer/Footer";
import PrivateRoute from "./src/components/Login/PrivateRoute";
import Details from "./src/components/Details/Details";
import { dummydata } from "./src/data";
import Cart from "./src/components/cart/Cart";

const Layout = () => {
 
  const location = useLocation();
  const hideNavAndFooter = location.pathname === "/login";

  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      <Routes>
       
        <Route path="/login" element={<Login />} />
        <Route path="/details/:id" element={<PrivateRoute><Details items={dummydata} /></PrivateRoute>} />
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>} />
        <Route path="/shop" element={<PrivateRoute><Shop /></PrivateRoute>} />
        <Route path="/grocery" element={<PrivateRoute><Grocery /></PrivateRoute>} />
        <Route path="/feedback" element={<PrivateRoute><Feedback /></PrivateRoute>} />
        <Route path="*" element={<PrivateRoute><h1>404 Not Found</h1></PrivateRoute>} />
      </Routes>
    { !hideNavAndFooter && <Footer />}
    </>
  );
};

export default Layout;
