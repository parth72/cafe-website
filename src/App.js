// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import Story from "./components/Story";
import Footer from "./components/Footer";
import "./styles.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Menu />
      <Reviews />
      <Story />
      <Footer />
    </>
  );
};

export default App;
