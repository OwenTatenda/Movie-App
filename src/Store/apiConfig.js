const apiConfig = {
  apiKey: "1eecd0a667266751ec35e255032ece1c",
  homeItemsList:
    "https://api.themoviedb.org/3/movie/popular?api_key=1eecd0a667266751ec35e255032ece1c&language=en-US&page=1",
  trendingItems:
    "https://api.themoviedb.org/3/movie/popular?api_key=1eecd0a667266751ec35e255032ece1c&language=en-US&page=1",

  topRated:
    "https://api.themoviedb.org/3/movie/top_rated?api_key=1eecd0a667266751ec35e255032ece1c&language=en-US&page=1",
  trendingTv:
    "https://api.themoviedb.org/3/tv/popular?api_key=1eecd0a667266751ec35e255032ece1c&language=en-US&page=1",
  topRatedTv:
    "https://api.themoviedb.org/3/tv/top_rated?api_key=1eecd0a667266751ec35e255032ece1c&language=en-US&page=1",

  movieTags:
    "https://api.themoviedb.org/3/movie/436270?api_key=1eecd0a667266751ec35e255032ece1c&language=en-US",

  keywordSearch:
    "https://api.themoviedb.org/3/search/movie?api_key=1eecd0a667266751ec35e255032ece1c&query=raya&page=1",
  movieVideos:
    "https://api.themoviedb.org/3/movie/527774/videos?api_key=1eecd0a667266751ec35e255032ece1c&language=en-US",
  similarVideos:
    "https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=<<api_key>>&language=en-US&page=1",
};

export default apiConfig;
