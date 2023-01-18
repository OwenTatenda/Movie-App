import React from "react";
import styles from "../CSS/Tags.module.css";

const Tags = (props) => {
  return (
    <div className={styles["tags"]}>
      <p className={styles["tag-name"]}>{props.name}</p>
    </div>
  );
};

export default Tags;
