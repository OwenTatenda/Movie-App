import React, { useEffect } from "react";
import "@splidejs/react-splide/css";
import styles from "../CSS/TrendingSection.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useDispatch, useSelector } from "react-redux";
import { getTopRatedTv, getTrendingTvList } from "../Store/app-actions";
import apiConfig from "../Store/apiConfig";
import Item from "./Item";
import { Link } from "react-router-dom";

const TopRatedTv = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.appState.topRatedTvList);

  const trendingList = data.slice(0, 12);

  useEffect(() => {
    dispatch(getTopRatedTv(apiConfig.topRatedTv));
  }, []);

  return (
    <div className={styles["trending-section"]}>
      <div className={styles["top-div"]}>
        <h3 className={styles["name"]}>Top Rated Tv</h3>
        <Link to={"/rated-tv"} className={styles["link"]}>
          View All
        </Link>
      </div>
      <div className={styles["splide"]}>
        <Splide
          options={{
            breakpoints: {
              800: {
                perPage: 1,
                gap: "1rem",
                height: 400,
                width: 210,
                direction: "ttb",
              },
            },
            pagination: false,
            arrows: false,
            height: 400,
            rewind: true,
            gap: "1rem",
            drag: "free",
            perPage: 5,
          }}
        >
          {trendingList?.map((item, i) => {
            return (
              <SplideSlide key={i}>
                <Item
                  key={i}
                  item={item}
                  id={item.id}
                  title={item.original_name}
                  poster={item.poster_path}
                  overview={item.overview}
                  backdropImage={item.backdrop_path}
                ></Item>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default TopRatedTv;
