import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../CSS/Item.module.css";

const Item = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles["item"]}
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        navigate(`/movie-details/${props.id}`, {
          state: {
            title: props.title,
            item: props.item,
            id: props.id,
            poster: `https://www.themoviedb.org/t/p/w500${props.poster}`,
            overview: props.overview,
            backdrop: props.backdropImage,
          },
        });
      }}
    >
      <div className={styles["icon"]}>
        <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
      </div>
      <div className={styles["backdrop"]}></div>
      <img
        src={`https://www.themoviedb.org/t/p/w500${props.poster}`}
        className={styles["img-poster"]}
        alt=""
      />
      <p className={styles["movie-name"]}>{props.title}</p>
    </div>
  );
};

export default Item;
