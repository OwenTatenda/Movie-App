import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  popularList: [],
  trendingList: [],
  topRatedList: [],
  trendingTvList: [],
  topRatedTvList: [],
  movieCredits: [],
  movieTags: [],
  keywordSearch: [],
  movieVideo: [],
  similar: [],
};

const appStateSlice = createSlice({
  name: "app-state",
  initialState: initialState,
  reducers: {
    getPopularMovies(state, action) {
      state.popularList = action.payload;
    },
    getTrendingMovies(state, action) {
      state.trendingList = action.payload;
    },

    getTopRatedMovies(state, action) {
      state.topRatedList = action.payload;
    },

    getTrendingTv(state, action) {
      state.trendingTvList = action.payload;
    },

    getTopRatedTvList(state, action) {
      state.topRatedTvList = action.payload;
    },
    getMovieCredits(state, action) {
      state.movieCredits = action.payload;
    },
    getMovieTags(state, action) {
      state.movieTags = action.payload;
    },
    getKeywordSearch(state, action) {
      state.keywordSearch = action.payload;
    },

    getMovieVideo(state, action) {
      state.movieVideo = action.payload;
    },

    gteSimilar(state, action) {
      state.similar = action.payload;
    },
  },
});

export const appStateActiions = appStateSlice.actions;

export default appStateSlice;
