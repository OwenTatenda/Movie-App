import { appStateActiions } from "./appStateSlice";

export const getPopularMovieList = (apiCall) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(apiCall);
      if (!response.ok) {
        throw new Error("Could not fetch popular data!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const popData = await fetchData();
      dispatch(appStateActiions.getPopularMovies(popData.results));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getTrendingMovieList = (apiCall) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(apiCall);
      if (!response.ok) {
        throw new Error("Could not fetch popular data!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const trendData = await fetchData();
      dispatch(appStateActiions.getTrendingMovies(trendData.results));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getTopRatedList = (apiCall) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(apiCall);
      if (!response.ok) {
        throw new Error("Could not fetch popular data!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const topRatedData = await fetchData();
      dispatch(appStateActiions.getTopRatedMovies(topRatedData.results));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getTrendingTvList = (apiCall) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(apiCall);
      if (!response.ok) {
        throw new Error("Could not fetch popular data!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const trendingTv = await fetchData();
      dispatch(appStateActiions.getTrendingTv(trendingTv.results));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getTopRatedTv = (apiCall) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(apiCall);
      if (!response.ok) {
        throw new Error("Could not fetch popular data!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const topRatedTv = await fetchData();
      dispatch(appStateActiions.getTopRatedTvList(topRatedTv.results));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getMovieCredits = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=1eecd0a667266751ec35e255032ece1c&language=en-US`
      );
      if (!response.ok) {
        throw new Error("Could not fetch popular data!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const credits = await fetchData();
      dispatch(appStateActiions.getMovieCredits(credits.cast));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getMovieTags = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=1eecd0a667266751ec35e255032ece1c&language=en-US`
      );
      if (!response.ok) {
        throw new Error("Could not fetch popular data!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const tags = await fetchData();
      dispatch(appStateActiions.getMovieTags(tags.genres));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const keywordSearch = (keyword) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=1eecd0a667266751ec35e255032ece1c&query=${keyword}&page=1`
      );
      if (!response.ok) {
        throw new Error("Could not fetch keyword data!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const keyword = await fetchData();
      dispatch(appStateActiions.getKeywordSearch(keyword.results));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const movieVideos = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=1eecd0a667266751ec35e255032ece1c&language=en-US`
      );
      if (!response.ok) {
        throw new Error("Could not fetch video data!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const video = await fetchData();
      dispatch(appStateActiions.getMovieVideo(video.results[0]));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const similarVideos = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `
        https://api.themoviedb.org/3/movie/${id}/similar?api_key=1eecd0a667266751ec35e255032ece1c&language=en-US&page=1`
      );
      if (!response.ok) {
        throw new Error("Could not fetch video data!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const similar = await fetchData();
      dispatch(appStateActiions.gteSimilar(similar.results));
    } catch (error) {
      console.log(error.message);
    }
  };
};
