import styles from "../../styles/Abc.module.scss";
import { useState, useEffect, useRef } from "react";

const Abc = (props) => {
  const [weight, setWeight] = useState("100");

  return (
    <div className={styles.container} style={{ fontWeight: weight }}>
      <div style={{ display: "none" }}>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="filters">
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
        <div className={styles.letter}>
          <h3>a</h3>
        </div>
        <div className={styles.letter}>
          <h3>b</h3>
        </div>
        <div className={styles.letter}>
          <h3>c</h3>
        </div>
        <div className={styles.letter}>
          <h3>d</h3>
        </div>
        <div className={styles.letter}>
          <h3>e</h3>
        </div>
        <div className={styles.letter}>
          <h3>f</h3>
        </div>
        <div className={styles.letter}>
          <h3>g</h3>
        </div>
        <div className={styles.letter}>
          <h3>h</h3>
        </div>
        <div className={styles.letter}>
          <h3>i</h3>
        </div>
        <div className={styles.letter}>
          <h3>j</h3>
        </div>
        <div className={styles.letter}>
          <h3>k</h3>
        </div>
        <div className={styles.letter}>
          <h3>l</h3>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.letter}>
          <h3>m</h3>
        </div>
        <div className={styles.letter}>
          <h3>n</h3>
        </div>
        <div className={styles.letter}>
          <h3>o</h3>
        </div>
        <div className={styles.letter}>
          <h3>p</h3>
        </div>
        <div className={styles.letter}>
          <h3>q</h3>
        </div>
        <div className={styles.letter}>
          <h3>r</h3>
        </div>
        <div className={styles.letter}>
          <h3>s</h3>
        </div>
        <div className={styles.letter}>
          <h3>t</h3>
        </div>
        <div className={styles.letter}>
          <h3>u</h3>
        </div>
        <div className={styles.letter}>
          <h3>v</h3>
        </div>
        <div className={styles.letter}>
          <h3>w</h3>
        </div>
        <div className={styles.letter}>
          <h3>x</h3>
        </div>
      </div>
      <div className={styles.lastSection}>
        <div className={styles.letter}>
          <h3>y</h3>
        </div>
        <div className={styles.letter}>
          <h3>z</h3>
        </div>
      </div>
    </div>
  );
};

export default Abc;
