import Grid from '@mui/material/Grid';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';

import { useEffect } from 'react';
import { useFirestore, useUser } from 'reactfire';
import { useSelector, useDispatch } from 'react-redux';

import loadingGif from '../../assets/ghibli-loading.gif';
import fetchUserData from '../../store/user-data-actions';
import MoviesListItem from './MoviesListItem';

const MoviesList = () => {
  const error = useSelector((state) => state.moviesData.error);
  const movies = useSelector((state) => state.moviesData.movies);
  const isLoading = useSelector((state) => state.moviesData.isLoading);

  const dispatch = useDispatch();
  const firestore = useFirestore();
  const { data: user } = useUser();

  useEffect(() => {
    if (!user) {
      return;
    }

    console.log('effect');
    dispatch(fetchUserData(firestore, user.uid));
  }, [dispatch, user]);

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
