import styles from "../../styles/FontWeight.module.scss";
import { useState, useEffect, useRef } from "react";

const FontWeight = (props) => {
  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <div className={styles.light}>
        <h3>Aa</h3>
        <p>skik light</p>
      </div>
      <div className={styles.normal}>
        <h3>Aa</h3>
        <p>skik normal</p>
      </div>
      <div className={styles.bold}>
        <h3>Aa</h3>
        <p>skik bold</p>
      </div>
      <div className={styles.black}>
        <h3>Aa</h3>
        <p>skik black</p>
      </div>
    </div>
  );
};

export default FontWeight;
