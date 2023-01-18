import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../CSS/MovieItem.module.css";

const MovieItem = (props) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles["movie-item"]}
      style={{
        backgroundImage: `url("https://www.themoviedb.org/t/p/original/${props.backdropImage}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
        backgroundColor: "black",
      }}
    >
      {/* <img
        className={styles["backdrop"]}
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face${props.backdropImage}`}
        alt=""
      /> */}
      <div className={styles["description"]}>
        <h2 className={styles["movie-name"]}>{props.title}</h2>
        <p className={styles["summary-plot"]}>{props.overview}</p>
        <div className={styles["btns"]}>
          <button
            onClick={() => {
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
            className={styles["btn1"]}
          >
            Watch now
          </button>
          <button className={styles["btn2"]}>Watch trailer</button>
        </div>
      </div>
      <div className={styles["img"]}>
        <img
          src={`https://www.themoviedb.org/t/p/w500${props.poster}`}
          className={styles["img-poster"]}
          alt=""
        />
      </div>
    </div>
  );
};

export default MovieItem;
