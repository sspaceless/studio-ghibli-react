import Grid from '@mui/material/Grid';
import Slide from '@mui/material/Slide';
import { Typography } from '@mui/material';

import { useSelector } from 'react-redux';

import MoviesListItem from './MoviesListItem';
import loadingGif from '../../assets/ghibli-loading.gif';

const MoviesList = () => {
  const error = useSelector((state) => state.moviesData.error);
  const movies = useSelector((state) => state.moviesData.movies);
  const isLoading = useSelector((state) => state.moviesData.isLoading);

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
          {isLoading && (
            <Grid item xs={1} component="img" src={loadingGif} alt="loading-animation" />
          )}
        </Grid>
      </Slide>
      <Slide in={!isLoading} direction="up" timeout={500} mountOnEnter>
        <Grid container flexDirection="column" alignItems="center">
          {!isLoading && (
            <Grid item mt={10}>
              <Typography variant="h1" color="white">
                Studio Ghibli
              </Typography>
            </Grid>
          )}
          {content}
        </Grid>
      </Slide>
    </>
  );
};

export default MoviesList;
