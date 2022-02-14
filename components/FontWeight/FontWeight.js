import styles from "../../styles/FontWeight.module.scss";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const FontWeight = (props) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
      viewport: { once: true },
    },
  };

  const item = {
    hidden: { y: -10, opacity: 0, viewport: { once: true } },
    show: { y: 0, opacity: 1, viewport: { once: true } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={styles.container}
    >
      <motion.div variants={item} className={styles.light}>
        <h3>Aa</h3>
        <p>skik light</p>
      </motion.div>
      <motion.div variants={item} className={styles.normal}>
        <h3>Aa</h3>
        <p>skik normal</p>
      </motion.div>
      <motion.div variants={item} className={styles.bold}>
        <h3>Aa</h3>
        <p>skik bold</p>
      </motion.div>
      <motion.div variants={item} className={styles.black}>
        <h3>Aa</h3>
        <p>skik black</p>
      </motion.div>
    </motion.div>
  );
};

export default FontWeight;
