import styles from "../../styles/Creator.module.scss";
import { useState, useEffect, useRef } from "react";

const Creator = (props) => {
  useEffect(() => {}, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "60%",
        marginBottom: "100px",
      }}
    >
      <div className={styles.container}>
        <div className={styles.yellow}></div>
        <div className={styles.maskmask}>
          <div className={styles.mask}></div>
        </div>
        <div className={styles.justa}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.yellow}></div>
        <div className={styles.maskmask}>
          <div className={styles.mask}></div>
        </div>

        <div className={styles.joao}></div>
      </div>
    </div>
  );
};

export default Creator;
