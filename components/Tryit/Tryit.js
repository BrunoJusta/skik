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

  const handleClick = (id) => {
    if (id === "100") {
      setWeight("100");
    }
    if (id === "400") {
      setWeight("200");
    }
    if (id === "600") {
      setWeight("600");
    }
    if (id === "800") {
      setWeight("800");
    }
  };

  const handleChange = () => {
    setPoints(points.current.value);
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
            Light
          </motion.button>
          <motion.button variants={item} onClick={() => setWeight("400")}>
            Normal
          </motion.button>
          <motion.button variants={item} onClick={() => setWeight("600")}>
            Bold
          </motion.button>
          <motion.button variants={item} onClick={() => setWeight("800")}>
            Black
          </motion.button>
        </motion.div>
        <motion.input
          variants={input}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={style.range}
          type="range"
          ref={points}
          name="pt"
          min="12"
          max="66"
          onChange={() => handleChange()}
        />
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
        style={{ fontWeight: weight, fontSize: `${pts}pt` }}
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
