import { useCallback, useEffect, useState } from 'react';
import classes from './MoviesList.module.css';
import MoviesListItem from './MoviesListItem';

const MoviesLIst = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://ghibliapi.herokuapp.com/films');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedMovies = data.map((item) => ({
        description: item.description,
        director: item.director,
        id: item.id,
        posterUrl: item.image,
        locations: item.locations,
        movieBanner: item.movie_banner,
        originalTitle: item.original_title,
        originalTitleRomanised: item.original_title_romanised,
        people: item.people,
        producer: item.producer,
        releaseDate: item.release_date,
        rating: item.rt_score,
        runningTime: item.running_time,
        species: item.species,
        title: item.title,
        movieUrl: item.url,
        vehicles: item.vehicles
      }));
      setMovies(loadedMovies);
    } catch (e) {
      setError(e.message);
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
