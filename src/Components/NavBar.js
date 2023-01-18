import React, { useEffect, useState } from "react";
import styles from "../CSS/NavBar.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { keywordSearch } from "../Store/app-actions";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const [style, setStyle] = useState(styles.navbar);
  const [keyword, setKeyword] = useState("");
  const [styleLink, setStyleLink] = useState(styles.link);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getKeywordHandler = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  const fetchDataHandler = (e) => {
    e.preventDefault();
    navigate("/keyword-search");
    dispatch(keywordSearch(keyword));
  };

  const changeNavBar = () => {
    if (window.scrollY >= 100) {
      setStyle(styles["navbar-active"]);
      setStyleLink(styles["link"]);
    } else if (window.scrollY < 101) {
      setStyle(styles["navbar"]);
      setStyleLink(styles["link-active"]);
    }
  };

  const goToHome = () => {
    navigate("/");
  };

  window.addEventListener("scroll", changeNavBar);
  return (
    <div className={style}>
      <h2 className={styles["app-name"]} onClick={goToHome}>
        <span>
          {" "}
          <FontAwesomeIcon
            className={styles["icon"]}
            icon={faCirclePlay}
          />{" "}
        </span>{" "}
        rMovies.com
      </h2>
      <div className={styles["links"]}>
        <Link className={styleLink} to={"/"}>
          Home
        </Link>
        <Link to={"/movies"} className={styleLink}>
          Movies
        </Link>
        <Link to={"/trending-tv"} className={styleLink}>
          TV Series
        </Link>
      </div>
      <div className={styles["search-Tab"]}>
        <form action="" className={styles["form"]} onSubmit={fetchDataHandler}>
          <input
            size="38"
            type="text"
            placeholder="Enter keyword"
            onChange={getKeywordHandler}
            className={styles["input"]}
          />
          <input type="submit" className={styles["submit-btn"]} />
        </form>
      </div>
    </div>
  );
};

export default NavBar;
