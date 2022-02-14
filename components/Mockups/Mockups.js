import styles from "../../styles/Mockups.module.scss";
import { useState, useEffect, useRef } from "react";

const Mockups = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.mockup1}></div>
      <div className={styles.mockup2}></div>
      <div className={styles.mockup3}></div>
      <div className={styles.mockup4}></div>
      <div className={styles.mockup5}></div>
      <div className={styles.mockup6}></div>
    </div>
  );
};

export default Mockups;
