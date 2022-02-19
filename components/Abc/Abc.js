import styles from "../../styles/Abc.module.scss";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Abc = (props) => {
  const [weight, setWeight] = useState("100");
  const [pts, setPoints] = useState("40");
  const points = useRef();
  const weights = useRef();

  const ini = useRef();
  const handleChange = () => {
    setPoints(points.current.value);
  };
  const handleChange2 = () => {
    setWeight(weights.current.value);
  };
  const abc = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
      viewport: { once: true },
    },
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
      viewport: { once: true },
    },
  };

  const input = {
    hidden: { y: -10, opacity: 0, viewport: { once: true } },
    show: {
      y: 0,
      opacity: 1,
      viewport: { once: true },
      transition: {
        duration: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: -10, opacity: 0, viewport: { once: true } },
    show: { y: 0, opacity: 1, viewport: { once: true } },
  };
  return (
    <motion.div className={styles.container}>
      <motion.div style={{ display: "none" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="filters"
        >
          <defs>
            <filter id="blur0">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0,0" />
            </filter>
            <filter id="blur1">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1,0" />
            </filter>
            <filter id="blur2">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2,0" />
            </filter>
            <filter id="blur3">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1,3" />
            </filter>
            <filter id="blur4">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1,2" />
            </filter>
            <filter id="blur5">
              <feGaussianBlur in="SourceGraphic" stdDeviation="-10,5" />
            </filter>
            <filter id="multiply">
              <feBlend mode="screen" in="SourceGraphic" />
            </filter>
          </defs>
        </svg>
      </motion.div>
      <motion.div className={styles.supacontrols}>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={styles.controls}
        >
          <motion.button variants={item} onClick={() => setWeight("100")}>
            thin
          </motion.button>
          <motion.button variants={item} onClick={() => setWeight("400")}>
            regular
          </motion.button>
          <motion.button variants={item} onClick={() => setWeight("600")}>
            semibold
          </motion.button>
          <motion.button variants={item} onClick={() => setWeight("800")}>
            bold
          </motion.button>
        </motion.div>
        <div className={styles.sliders}>
          <label for="we">Weight</label>
          <motion.input
            id="we"
            variants={input}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            type="range"
            ref={weights}
            name="pt"
            min="100"
            max="700"
            onChange={() => handleChange2()}
          />
        </div>

        <div className={styles.sliders}>
          <label for="we">Size (pt)</label>
          <motion.input
            variants={input}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            type="range"
            ref={points}
            name="pt"
            min="12"
            max="40"
            onChange={() => handleChange()}
          />
        </div>
      </motion.div>

      <motion.div
        variants={abc}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={styles.section}
        style={{
          fontVariationSettings: `"wght" ${weight}`,
          fontSize: `${pts}pt`,
        }}
      >
        <motion.div variants={item} className={styles.letter}>
          a
        </motion.div>
        <motion.div variants={item} className={styles.letter}>
          b
        </motion.div>
        <motion.div variants={item} className={styles.letter}>
          c
        </motion.div>
        <motion.div variants={item} className={styles.letter}>
          d
        </motion.div>
        <motion.div variants={item} className={styles.letter}>
          e
        </motion.div>
        <motion.div variants={item} className={styles.letter}>
          f
        </motion.div>
        <motion.div variants={item} className={styles.letter}>
          g
        </motion.div>
        <motion.div variants={item} className={styles.letter}>
          h
        </motion.div>
        <motion.div variants={item} className={styles.letter}>
          i
        </motion.div>
        <motion.div variants={item} className={styles.letter}>
          j
        </motion.div>
        <motion.div variants={item} className={styles.letter}>
          k
        </motion.div>
        <motion.div variants={item} className={styles.letter}>
          l
        </motion.div>
        <motion.div variants={item} className={styles.letter}>
          m
        </motion.div>
        <motion.div variants={item} className={styles.letter}>
          n
        </motion.div>
        <motion.div variants={item} className={styles.letter}>
          o
        </motion.div>
        <motion.div variants={item} className={styles.letter}>
          p
        </motion.div>
        <motion.div variants={item} className={styles.letter}>
          q
        </motion.div>
        <motion.div variants={item} className={styles.letter}>
          r
        </motion.div>
        <motion.div variants={item} className={styles.letter}>
          s
        </motion.div>
        <motion.div variants={item} className={styles.letter}>
          t
        </motion.div>
        <motion.div variants={item} className={styles.letter}>
          u
        </motion.div>
        <motion.div variants={item} className={styles.letter}>
          v
        </motion.div>
        <motion.div variants={item} className={styles.letter}>
          w
        </motion.div>
        <motion.div variants={item} className={styles.letter}>
          x
        </motion.div>
        <motion.div variants={item} className={styles.letter}>
          y
        </motion.div>
        <motion.div variants={item} className={styles.letter}>
          z
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Abc;
