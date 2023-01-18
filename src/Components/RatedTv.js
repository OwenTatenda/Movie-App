import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import styles from "../CSS/Movies.module.css";

const RatedTv = () => {
  const data = useSelector((state) => state.appState.topRatedTvList);
  const trendingList = data.slice(0, 21);

  return (
    <div className={styles["movies"]}>
      <h4 className={styles["movie-name"]}>Top Rated Tv</h4>
      <div className={styles["movie-items"]}>
        {trendingList?.map((item, i) => {
          return (
            <Item
              id={item.id}
              key={item.id}
              item={item}
              title={item.original_name}
              poster={item.poster_path}
              overview={item.overview}
              backdropImage={item.backdrop_path}
            ></Item>
          );
        })}
      </div>
    </div>
  );
};

export default RatedTv;
