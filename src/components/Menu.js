// src/components/Menu.js
import React from "react";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Espresso", price: "₹80" },
  { name: "Cappuccino", price: "₹120" },
  { name: "Latte", price: "₹150" },
  { name: "Mocha", price: "₹140" },
];

const Menu = () => {
  return (
    <section id="menu" className="menu">
      <h2>Our Menu</h2>
      <motion.div
        className="menu-list"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            className="menu-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <span>{item.name}</span>
            <span>{item.price}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Menu;
