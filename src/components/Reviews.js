// src/components/Reviews.js
import React from "react";
import { motion } from "framer-motion";

const reviews = [
  { name: "Aman", review: "Best coffee in town!" },
  { name: "Priya", review: "Loved the vibes and the biscuits!" },
];

const Reviews = () => {
  return (
    <section id="reviews" className="reviews">
      <h2>Customer Reviews</h2>
      <div className="review-cards">
        {reviews.map((rev, index) => (
          <motion.div
            key={index}
            className="review-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{rev.name}</h3>
            <p>{rev.review}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
