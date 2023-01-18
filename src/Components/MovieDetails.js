import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import styles from "../CSS/MovieDetails.module.css";
import { getMovieCredits, getMovieTags } from "../Store/app-actions";
import Images from "./Images";
import Tags from "./Tags";
import { Fragment } from "react";
import ReactPlayer from "react-player";
import { movieVideos } from "../Store/app-actions";
import { similarVideos } from "../Store/app-actions";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Item from "./Item";
import style from "../CSS/Movies.module.css";

const MovieDetails = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const castData = useSelector((state) => state.appState.movieCredits);
  const movieTags = useSelector((state) => state.appState.movieTags);
  const videos = useSelector((state) => state.appState.movieVideo);
  const similar = useSelector((state) => state.appState.similar);

  const castMembers = castData.slice(0, 4);

  console.log(similar);

  useEffect(() => {
    dispatch(getMovieCredits(id));
    dispatch(getMovieTags(id));
    dispatch(movieVideos(id));
    dispatch(similarVideos(id));
  }, [dispatch, id]);

  return (
    <Fragment>
      <div
        className={styles["movie-details"]}
        style={{
          backgroundImage: `url("https://www.themoviedb.org/t/p/original/${state.backdrop}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          backgroundColor: "black",
        }}
      >
        <div className={styles["content-section"]}>
          <div className={styles["poster"]}>
            <img src={`${state?.poster}`} alt="" className={styles["img"]} />
          </div>
          <div className={styles["content"]}>
            <p className={styles["movie-name"]}>{state?.title}</p>
            <div className={styles["tags"]}>
              {movieTags?.map((item, i) => {
                return <Tags key={i} name={item.name}></Tags>;
              })}
            </div>
            <div className={styles["summary"]}>
              <p className={styles["summary-content"]}>{state?.overview}</p>
            </div>
            <div className="cast">
              <p className={styles["casts"]}>{""} Cast</p>
              <div className={styles["images"]}>
                {castMembers?.map((item, i) => {
                  return (
                    <Images
                      key={i}
                      name={item.name}
                      picture={item.profile_path}
                    ></Images>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["trailer-section"]}>
        <h3 className={styles["trailer-name"]}>{state?.title} Trailer</h3>
        <ReactPlayer
          className={styles["player"]}
          width="900px"
          height="600px"
          url={`https://www.youtube.com/watch?v=${videos?.key}`}
        />
      </div>
      <div className={style["movies"]}>
        <h4 className={style["movie-name"]}>Similar</h4>
        <div className={style["movie-items"]}>
          {similar?.map((item, i) => {
            return (
              <Item
                id={item.id}
                key={item.id}
                item={item}
                title={item.title}
                poster={item.poster_path}
                overview={item.overview}
                backdropImage={item.backdrop_path}
              ></Item>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default MovieDetails;
