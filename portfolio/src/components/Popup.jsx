import React from 'react';
import { motion } from 'framer-motion';
import popupimg from '../assets/popup.jpg'
const PopUp = ({ onClose }) => {
  return (
    <motion.div
      className="popup-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="popup-content"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Disclaimer</h2>
        <p>Had less than a day to make this webpage. ggs. </p>
        <img src={popupimg} alt="" />
        <button onClick={onClose}>Close</button>
      </motion.div>
    </motion.div>
  );
};

export default PopUp;
