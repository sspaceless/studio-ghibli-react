import axios from 'axios';

import { moviesDataActions } from './movies-data-slice';
import processApiData from '../modules/process-api-data';
import { API_URL } from '../config';

const fetchMoviesData = () => async (dispatch) => {
  const fetchData = async () => {
    dispatch(moviesDataActions.setIsLoading({ isLoading: true }));
    dispatch(moviesDataActions.setError({ error: null }));

    const response = await axios.get(API_URL);
    const processedData = processApiData(response.data);
    return processedData;
  };

  try {
    const moviesData = await fetchData();

    dispatch(
      moviesDataActions.setMovies({
        movies: moviesData ?? [],
      }),
    );
    dispatch(moviesDataActions.setIsLoading({ isLoading: false }));
  } catch (e) {
    dispatch(moviesDataActions.setError({ error: e.message }));
  }
};

export default fetchMoviesData;
