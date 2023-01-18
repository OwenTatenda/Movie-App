import React, { useEffect } from "react";
import styles from "../CSS/HeroSection.module.css";
import apiConfig from "../Store/apiConfig";
import { getPopularMovieList } from "../Store/app-actions";
import { useDispatch, useSelector } from "react-redux";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import MovieItem from "./MovieItem";

const HeroSection = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.appState.popularList);

  useEffect(() => {
    dispatch(getPopularMovieList(apiConfig.homeItemsList));
  }, []);

  const getListData = data.slice(0, 5);

  return (
    <div className={styles["hero-section"]}>
      <Splide
        options={{
          perPage: 1,
          pagination: false,
          arrows: false,
          perMove: 1,
          grid: "1rem",
          drag: "free",
          height: 730,
        }}
      >
        {getListData?.map((item, i) => {
          return (
            <SplideSlide key={i}>
              <MovieItem
                key={i}
                backdropImage={item.backdrop_path}
                title={item.title}
                id={item.id}
                overview={item.overview}
                poster={item.poster_path}
              ></MovieItem>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default HeroSection;
