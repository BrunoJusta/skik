import styles from "../../styles/Abc.module.scss";
import { useState, useEffect, useRef } from "react";

const Abc = (props) => {
  const [weight, setWeight] = useState("100");

  return (
    <div className={styles.container} style={{ fontWeight: weight }}>
      <div style={{ display: "none" }}>
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
      </div>
      <div className={styles.controls}>
        <button onClick={() => setWeight("100")}>Light</button>
        <button onClick={() => setWeight("400")}>Normal</button>
        <button onClick={() => setWeight("600")}>Bold</button>
        <button onClick={() => setWeight("800")}>Black</button>
      </div>
      <div className={styles.section}>
        <div className={styles.letter}>a</div>
        <div className={styles.letter}>b</div>
        <div className={styles.letter}>c</div>
        <div className={styles.letter}>d</div>
        <div className={styles.letter}>e</div>
        <div className={styles.letter}>f</div>
        <div className={styles.letter}>g</div>
        <div className={styles.letter}>h</div>
        <div className={styles.letter}>i</div>
        <div className={styles.letter}>j</div>
        <div className={styles.letter}>k</div>
        <div className={styles.letter}>l</div>
        <div className={styles.letter}>m</div>
        <div className={styles.letter}>n</div>
        <div className={styles.letter}>o</div>
        <div className={styles.letter}>p</div>
        <div className={styles.letter}>q</div>
        <div className={styles.letter}>r</div>
        <div className={styles.letter}>s</div>
        <div className={styles.letter}>t</div>
        <div className={styles.letter}>u</div>
        <div className={styles.letter}>v</div>
        <div className={styles.letter}>w</div>
        <div className={styles.letter}>x</div>
        <div className={styles.letter}>y</div>
        <div className={styles.letter}>z</div>
      </div>
    </div>
  );
};

export default Abc;
