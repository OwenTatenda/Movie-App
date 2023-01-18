import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetails from "./Components/MovieDetails";
import Movies from "./Components/Movies";
import RatedMovies from "./Components/RatedMovies";
import Trending from "./Components/TrendingTele";
import "./App.css";
import RatedTv from "./Components/RatedTv";
import KeywordSearch from "./Components/KeywordSearch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<HomePage />}></Route>
        <Route path="movie-details/:id" element={<MovieDetails />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="top-movies" element={<RatedMovies />}></Route>
        <Route path="trending-tv" element={<Trending />}></Route>
        <Route path="rated-tv" element={<RatedTv />}></Route>
        <Route path="keyword-search" element={<KeywordSearch />}></Route>
      </Routes>
    </div>
  );
}

export default App;
