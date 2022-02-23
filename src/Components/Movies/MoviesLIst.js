import classes from "./MoviesList.module.css";
import { useCallback, useEffect, useState } from "react";
import MoviesListItem from "./MoviesListItem";

const MoviesLIst = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://ghibliapi.herokuapp.com/films");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          description: data[key].description,
          director: data[key].director,
          id: data[key].id,
          posterUrl: data[key].image,
          locations: data[key].locations,
          movieBanner: data[key].movie_banner,
          originalTitle: data[key].original_title,
          originalTitleRomanised: data[key].original_title_romanised,
          people: data[key].people,
          producer: data[key].producer,
          releaseDate: data[key].release_date,
          rating: data[key].rt_score,
          runningTime: data[key].running_time,
          species: data[key].species,
          title: data[key].title,
          movieUrl: data[key].url,
          vehicles: data[key].vehicles,
        });
        setMovies(loadedMovies);
      }
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = movies.map((movie) => {
      return (
        <MoviesListItem
          key={movie.id}
          id={movie.id}
          title={movie.title}
          originalTitle={movie.originalTitle}
          originalTitleRomanised={movie.originalTitleRomanised}
          description={movie.description}
          posterUrl={movie.posterUrl}
        />
      );
    });
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return <div className={classes.movies}>{content}</div>;
};

export default MoviesLIst;
