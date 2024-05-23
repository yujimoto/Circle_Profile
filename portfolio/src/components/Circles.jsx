import React from 'react'

import { motion } from 'framer-motion';

const Circles = () => {
  const letters = ['Y', 'U', 'J', 'I'];

  return (
    <div className="circles-container">
      {letters.map((letter, index) => (
        <motion.div
          key={index}
          className="circle"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: index * 0.3 }}
        >
          {letter}
        </motion.div>
      ))}
    </div>
  );
};

export default Circles;