import React from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home";
import Store from "./component/Store/Store";
import Product from "./component/Product";
import Cart from "./component/Cart";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import LogIn from "./component/LogIn/LogIn";
import SignUp from "./component/SignUp/SignUp";
import Btn from "./component/BackToTop/Btn.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/store/:id" element={<Product />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <Footer />
      <Btn />
    </>
  );
}

export default App;
