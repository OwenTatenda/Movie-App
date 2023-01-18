import React from "react";
import { Link } from "react-router-dom";
import styles from "../CSS/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["name"]}>
        <h2 className={styles["app-name"]}>
          <span>
            {" "}
            <FontAwesomeIcon
              className={styles["icon"]}
              icon={faCirclePlay}
            />{" "}
          </span>{" "}
          rMovies.com
        </h2>
      </div>
      <div className={styles["all-links"]}>
        <div className={styles["container-1"]}>
          <Link className={styles["link"]}>Home</Link>
          <Link className={styles["link"]}>Contact us</Link>
          <Link className={styles["link"]}>Term Of service</Link>
          <Link className={styles["link"]}>About us</Link>
        </div>
        <div className={styles["container-2"]}>
          <Link className={styles["link"]}>Live</Link>
          <Link className={styles["link"]}>FAQ</Link>
          <Link className={styles["link"]}>Premium</Link>
          <Link className={styles["link"]}>Privacy policy</Link>
        </div>
        <div className={styles["container-3"]}>
          <Link className={styles["link"]}>You must watch</Link>
          <Link className={styles["link"]}>Recent release</Link>
          <Link className={styles["link"]}>Top IMDB</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
