import styles from "../../styles/Tryit.module.scss";
import { useState, useEffect, useRef } from "react";

const Tryit = (props) => {
  const [weight, setWeight] = useState("100");
  const [color, setColor] = useState("");
  const [pts, setPoints] = useState("65");
  const [style, setStyle] = useState("");

  const points = useRef();
  const ini = useRef();

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

  const handleChange = () => {
    setPoints(points.current.value);
  };

  return (
    <div className={styles.tryit}>
      <div className={styles.supacontrols}>
        <div className={styles.controls}>
          <button onClick={() => setWeight("100")} type="button">
            Light
          </button>
          <button onClick={() => setWeight("400")}>Normal</button>
          <button onClick={() => setWeight("600")}>Bold</button>
          <button onClick={() => setWeight("800")}>Black</button>
        </div>
        <input
          className={style.range}
          type="range"
          ref={points}
          name="pt"
          min="12"
          max="66"
          onChange={() => handleChange()}
        />
      </div>
      <input
        className={styles.aintCool}
        ref={ini}
        style={{ fontWeight: weight, fontSize: `${pts}pt` }}
        type="text"
        name="skik"
        autoComplete="off"
        placeholder="you aint cool if you aint skik"
        maxLength="30"
        size="10"
      ></input>
    </div>
  );
};

export default Tryit;
