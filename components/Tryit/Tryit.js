import styles from "../../styles/Tryit.module.scss";
import { useState, useEffect, useRef } from "react";

const Tryit = (props) => {
  const [weight, setWeight] = useState("100");
  const [color, setColor] = useState("");

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

  return (
    <div className={styles.tryit}>
      <div className={styles.controls}>
        <button onClick={() => setWeight("100")} type="button" autofocus>
          Light
        </button>
        <button autofocus onClick={() => setWeight("400")}>
          Normal
        </button>
        <button onClick={() => setWeight("600")}>Bold</button>
        <button onClick={() => setWeight("800")}>Black</button>
      </div>
      <input
        className={styles.aintCool}
        style={{ fontWeight: weight }}
        type="text"
        name="skik"
        autocomplete="off"
        placeholder="you aint cool if you aint skik"
        onfocus="this.placeholder = ''"
        maxlength="30"
        size="10"
      ></input>
    </div>
  );
};

export default Tryit;
