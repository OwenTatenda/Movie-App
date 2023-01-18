import React from "react";
import TrendingSection from "../Components/TrendingSection";
import HeroSection from "../Components/HeroSection";
import styles from "../CSS/HomePage.module.css";
import TopRated from "../Components/TopRated";
import TrendingTv from "../Components/TrendingTv";
import TopRatedTv from "../Components/TopRatedTv";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div className={styles["home-page"]}>
      <HeroSection></HeroSection>
      <TrendingSection></TrendingSection>
      <TopRated></TopRated>
      <TrendingTv></TrendingTv>
      <TopRatedTv></TopRatedTv>
    </div>
  );
};

export default HomePage;
