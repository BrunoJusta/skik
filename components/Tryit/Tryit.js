import styles from "../../styles/Tryit.module.scss";
import { useState, useEffect, useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { motion } from "framer-motion";

const Tryit = (props) => {
  const [weight, setWeight] = useState("100");
  const [color, setColor] = useState("");
  const [pts, setPoints] = useState("65");
  const [style, setStyle] = useState("");

  const points = useRef();
  const weights = useRef();
  const ini = useRef();

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

  const handleChange = () => {
    setPoints(points.current.value);
  };
  const handleChange2 = () => {
    setWeight(weights.current.value);
  };

  return (
    <motion.div className={styles.tryit}>
      <motion.div className={styles.supacontrols}>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={styles.controls}
        >
          <motion.button
            variants={item}
            onClick={() => setWeight("100")}
            type="motion.button"
          >
            thin
          </motion.button>
          <motion.button variants={item} onClick={() => setWeight("300")}>
            regular
          </motion.button>
          <motion.button variants={item} onClick={() => setWeight("500")}>
            semibold
          </motion.button>
          <motion.button variants={item} onClick={() => setWeight("700")}>
            bold
          </motion.button>
        </motion.div>
        <div className={styles.sliders}>
          <label htmlFor="we">Weight</label>
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
          <label htmlFor="wes">Size (pt)</label>
          <motion.input
            id="wes"
            variants={input}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            type="range"
            ref={points}
            name="pt"
            min="12"
            max="66"
            onChange={() => handleChange()}
          />
        </div>
      </motion.div>
      <motion.div className={styles.trytag}>
        <p>try it</p>
        <p className={styles.arrow}>
          <IoMdArrowDropdown />
        </p>
      </motion.div>
      <motion.input
        variants={input}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={styles.aintCool}
        ref={ini}
        style={{
          fontVariationSettings: `"wght" ${weight}`,
          fontSize: `${pts}pt`,
        }}
        type="text"
        name="skik"
        autoComplete="off"
        placeholder="you aint cool if you aint skik"
        maxLength="30"
        size="10"
      ></motion.input>
    </motion.div>
  );
};

export default Tryit;
