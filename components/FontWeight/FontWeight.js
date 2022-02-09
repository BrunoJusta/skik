import styles from "../../styles/FontWeight.module.scss";
import { useState, useEffect, useRef } from "react";

const FontWeight = (props) => {
  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <div className={styles.light}>
        <h3>Aa</h3>
        <p>Light</p>
      </div>
      <div className={styles.normal}>
        <h3>Aa</h3>
        <p>Normal</p>
      </div>
      <div className={styles.bold}>
        <h3>Aa</h3>
        <p>Bold</p>
      </div>
      <div className={styles.black}>
        <h3>Aa</h3>
        <p>Black</p>
      </div>
    </div>
  );
};

export default FontWeight;
