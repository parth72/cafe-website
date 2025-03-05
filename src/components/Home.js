import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="home">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Coffee Biscuit Udhar ☕🍪
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Closed on Sundays 🛑
        </motion.span>
      </motion.p>
    </section>
  );
};

export default Home;
