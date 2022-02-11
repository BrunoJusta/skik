import styles from "../../styles/Creator.module.scss";
import { useState, useEffect, useRef } from "react";
import {
  AiFillBehanceSquare,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
const Creator = (props) => {
  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <div className={styles.masksHolder}>
        <div className={styles.creator}>
          <div className={styles.maskMaster}>
            <div className={styles.yellowBorder}></div>
            <div className={styles.mask}>
              <div className={styles.maskmask}></div>
            </div>
            <div className={styles.justa}></div>
          </div>
          <div className={styles.description}>
            <h3>Bruno Justa</h3>
            <div className={styles.social}>
              <p>
                <AiFillBehanceSquare />
              </p>
              <p>
                <AiFillLinkedin />
              </p>
              <p>
                <AiFillInstagram />
              </p>
            </div>
          </div>
        </div>
        <div className={styles.creator}>
          <div className={styles.maskMaster}>
            <div className={styles.yellowBorder}></div>
            <div className={styles.mask}>
              <div className={styles.maskmask}></div>
            </div>
            <div className={styles.joao}></div>
          </div>
          <div className={styles.description}>
            <h3>João Vasconcelos</h3>
            <div className={styles.social}>
              <p>
                <AiFillBehanceSquare />
              </p>
              <p>
                <AiFillLinkedin />
              </p>
              <p>
                <AiFillInstagram />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creator;
