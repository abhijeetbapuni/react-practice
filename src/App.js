import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";

import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://practice-340fe-default-rtdb.firebaseio.com/movies.json"
      );
      //handle error here if your api doesn't send json error response
      //means if response is not success type of response
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      //handle error here if your api sends json error response after parsing to javascript object which takes some time

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
          //or  {id: key,...data[key]}
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]); //we need to use fetchMoviesHandler function in dependencies array because if we have some external state to change the movies, then fetchMoviesHandler woun't recall if App component won't rerender. and if we use fetchMoviesHandler function as a dependency then we shoud use useCallback hook so that function is a object and it changes reference on every rerender so useEffect will run infinitely.

  let content = <p>Found no movies.</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://practice-340fe-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie), //pass data as json in fetch api
        headers: {
          "Content-Type": "application/json", //as we are sending request body in json
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
