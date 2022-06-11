import React, { useContext } from "react";
import Movie from "../components/Movie";
import { movieContext } from "./MovieContext";
const MovieList = () => {
  const [movies, setMovies] = useContext(movieContext);
  return (
    <>
      <Movie moviesData={movies} />
    </>
  );
};

export default MovieList;
