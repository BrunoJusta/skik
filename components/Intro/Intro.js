import styles from "../../styles/Intro.module.scss";
import { useState, useEffect, useRef } from "react";

const Intro = (props) => {
  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>
        <div className={styles.text}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s..
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled.
          </p>
        </div>
        <div className={styles.gallery}>
          <div className={styles.image1}></div>
          <div className={styles.image2}></div>
          <div className={styles.image3}></div>
          <div className={styles.image4}></div>
        </div>
      </div>
      <div className={styles.secondSection}>
        <h2>optical ajustments</h2>
      </div>
      <div className={styles.thirdSection}></div>
    </div>
  );
};

export default Intro;
