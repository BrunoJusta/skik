import styles from "../../styles/Mockups.module.scss";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Mockups = (props) => {
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
      <motion.div variants={item} className={styles.mockup1}></motion.div>
      <motion.div variants={item} className={styles.mockup2}></motion.div>
      <motion.div variants={item} className={styles.mockup3}></motion.div>
      <motion.div variants={item} className={styles.mockup4}></motion.div>
      <motion.div variants={item} className={styles.mockup5}></motion.div>
      <motion.div variants={item} className={styles.mockup6}></motion.div>
    </motion.div>
  );
};

export default Mockups;
