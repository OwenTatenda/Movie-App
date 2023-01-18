import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import styles from "../CSS/Movies.module.css";

const KeywordSearch = () => {
  const data = useSelector((state) => state.appState.keywordSearch);

  return (
    <div className={styles["movies"]}>
      <div className={styles["movie-items"]}>
        {data?.map((item, i) => {
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
  );
};

export default KeywordSearch;
