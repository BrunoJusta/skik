import styles from "../../styles/Intro.module.scss";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Intro = (props) => {
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

  const img = {
    hidden: { opacity: 0, viewport: { once: true } },
    show: { opacity: 1, viewport: { once: true } },
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.firstSection}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className={styles.text}>
          <span className={styles.king} />
          <motion.p variants={item} style={{ textTransform: "lowercase" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting.
          </motion.p>
          <motion.p variants={item} style={{ textTransform: "lowercase" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s..
          </motion.p>
          <motion.p variants={item} style={{ textTransform: "lowercase" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled.
          </motion.p>
        </div>
        <motion.div
          className={styles.gallery}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className={styles.row}>
            <motion.div variants={img} className={styles.image1}></motion.div>
            <motion.div variants={img} className={styles.image2}></motion.div>
          </div>
          <div className={styles.row}>
            <motion.div variants={img} className={styles.image3}></motion.div>
            <motion.div variants={img} className={styles.image4}></motion.div>
          </div>
        </motion.div>
      </motion.div>
      <div className={styles.secondSection}>
        <h2>optical ajustments</h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={styles.gallery}
        >
          <motion.div variants={item} className={styles.ajust1}></motion.div>
          <motion.div variants={item} className={styles.ajust2}></motion.div>
          <motion.div variants={item} className={styles.ajust3}></motion.div>
        </motion.div>
      </div>
      <div className={styles.thirdSection}>
        <h2>dimensions</h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={styles.xsize}
        ></motion.div>
        <h2>weights</h2>
      </div>
    </div>
  );
};

export default Intro;
