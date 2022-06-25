import Grid from '@mui/material/Grid';
import Slide from '@mui/material/Slide';

import { useEffect } from 'react';
import useHttp from '../../hooks/use-http';
import processApiData from '../../modules/process-api-data';

import MoviesListItem from './MoviesListItem';
import loadingGif from '../../assets/ghibli-loading.gif';
import { URL_FILMS } from '../../config';

const MoviesList = () => {
  const {
    fetchDataHandler: fetchMoviesHandler,
    data: movies,
    isLoading,
    error,
  } = useHttp(URL_FILMS, processApiData);

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

  return (
    <>
      <Slide in={isLoading} direction="down" timeout={500}>
        <Grid container flexDirection="column" alignItems="center">
          {isLoading && <Grid item xs={1} component="img" src={loadingGif} alt="loading-animation" />}
        </Grid>
      </Slide>
      <Slide in={!isLoading} direction="up" timeout={500} mountOnEnter>
        <Grid container flexDirection="column" alignItems="center">
          {content}
        </Grid>
      </Slide>
    </>
  );
};

export default MoviesList;
