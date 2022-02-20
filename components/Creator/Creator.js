import styles from "../../styles/Creator.module.scss";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  AiFillBehanceSquare,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
const Creator = (props) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
      viewport: { once: true },
    },
  };

  const item = {
    hidden: { y: -100, opacity: 0, viewport: { once: true } },
    show: { y: 0, opacity: 1, viewport: { once: true } },
  };

  return (
    <motion.div className={styles.container}>
      <h2 className={styles.title}>unmask the creators</h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={styles.masksHolder}
      >
        <motion.div variants={item} className={styles.creator}>
          <motion.div className={styles.maskMaster}>
            <motion.div className={styles.yellowBorder}></motion.div>
            <motion.div className={styles.mask}>
              <motion.div className={styles.maskmask}></motion.div>
            </motion.div>
            <motion.div className={styles.justa}></motion.div>
          </motion.div>
          <motion.div className={styles.description}>
            <h3>bruno justa</h3>
            <motion.div className={styles.social}>
              <a href="https://www.behance.net/brunojusta98" target="_blank">
                <AiFillBehanceSquare />
              </a>
              <a
                href="https://www.linkedin.com/in/bruno-justa98/"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
              <a href="instagram.com/justadraws/" target="_blank">
                <AiFillInstagram />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div variants={item} className={styles.creator}>
          <motion.div className={styles.maskMaster}>
            <motion.div className={styles.yellowBorder}></motion.div>
            <motion.div className={styles.mask}>
              <motion.div className={styles.maskmask2}></motion.div>
            </motion.div>
            <motion.div className={styles.joao}></motion.div>
          </motion.div>
          <motion.div className={styles.description}>
            <h3>joao vasconcelos</h3>
            <motion.div className={styles.social}>
              <a href="https://www.behance.net/j0ny_" target="_blank">
                <AiFillBehanceSquare />
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <AiFillLinkedin />
              </a>
              <a href="https://www.instagram.com/who_dat_j0ny/" target="_blank">
                <AiFillInstagram />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Creator;
