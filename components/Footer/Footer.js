import styles from "../../styles/Footer.module.scss";
import { useState, useEffect, useRef } from "react";

const Footer = (props) => {
  useEffect(() => {}, []);

  return (
    <div className={styles.footer}>
      <p>2022 skik® - All rights reseved</p>
      <p>by Bruno Justa & João Vasconcelos</p>
    </div>
  );
};

export default Footer;
