import Grid from '@mui/material/Grid';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MoviesListItem from './MoviesListItem';
import loadingGif from '../../assets/ghibli-loading.gif';
// import fetchUserData from '../../store/user-data/user-data-actions';
import fetchMoviesData from '../../store/movies-data/movies-data-actions';

const MoviesList = () => {
  const error = useSelector((state) => state.apiData.error);
  const movies = useSelector((state) => state.apiData.movies);
  const isLoading = useSelector((state) => state.apiData.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    // if (!user) {
    //   return;
    // }
    // dispatch(fetchUserData(user.uid));
    dispatch(fetchMoviesData());
  }, [dispatch/* user */]);

  let content = <p>Found no movies.</p>;

  if (movies.length > 0 && !isLoading) {
    content = movies.map((movie) => (
      <MoviesListItem
        key={movie.id}
        id={movie.id}
        title={movie.title}
        posterUrl={movie.posterUrl}
        description={movie.description}
        originalTitle={movie.originalTitle}
        originalTitleRomanised={movie.originalTitleRomanised}
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
            <Grid item component="img" xs={1} src={loadingGif} alt="loading-animation" />
          )}
        </Grid>
      </Slide>
      <Slide in={!isLoading} direction="up" timeout={500} mountOnEnter>
        <Grid container flexDirection="column" alignItems="center">
          {!isLoading && (
            <Grid item mt={10} display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h2" color="white">
                Studio Ghibli
              </Typography>
              <Typography variant="h3" color="white">
                スタジオジブリ
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
