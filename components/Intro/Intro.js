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
          <motion.p variants={item}>
            This font was created in 2022 and was part of an academic project of
            the masters degree in Digital Design at the Polytechnic Institute of
            Cavado and Ave.
          </motion.p>
          <motion.p variants={item}>
            The skik font family was created for titles and branding displays.
            Skik is uniquee and for its construction was used a perfect circle
            that can be seen more prominent in letters like o and a. Some
            optical adjustments were also made to achive authenticity.
          </motion.p>
          <motion.p variants={item}>
            Skik is a variable font with only one axis, this being the weight.
            Its a display font, non-serif, lower case with some specific optical
            adjustments.
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
