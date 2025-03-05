// src/components/Story.js
import React from "react";
import { motion } from "framer-motion";

const Story = () => {
  return (
    <section id="story" className="story">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Our Story
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Founded in 2024, we serve the best coffee in town with a side of love.
      </motion.p>
    </section>
  );
};

export default Story;
