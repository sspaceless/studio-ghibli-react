import { useEffect } from 'react';
import useHttp from '../../hooks/use-http';
import classes from './MoviesList.module.css';
import MoviesListItem from './MoviesListItem';
import { URL_FILMS } from '../../config';

const MoviesList = () => {
  const processData = (data) => data.map((item) => ({
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
    vehicles: item.vehicles,
  }));

  const {
    fetchDataHandler: fetchMoviesHandler,
    data: movies,
    isLoading,
    error,
  } = useHttp(URL_FILMS, processData);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = movies.map((movie) => (
      <MoviesListItem
        key={movie.id}
        id={movie.id}
        title={movie.title}
        originalTitle={movie.originalTitle}
        originalTitleRomanised={movie.originalTitleRomanised}
        description={movie.description}
        posterUrl={movie.posterUrl}
      />
    ));
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return <div className={classes.movies}>{content}</div>;
};

export default MoviesList;
