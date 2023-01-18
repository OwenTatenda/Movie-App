import React from "react";
import styles from "../CSS/Images.module.css";

const Images = (props) => {
  return (
    <div className={styles["images"]}>
      <img
        className={styles["image"]}
        src={`https://www.themoviedb.org/t/p/original${props.picture}`}
        alt=""
      />
      <p className={styles["start-name"]}>{props.name}</p>
    </div>
  );
};

export default Images;
