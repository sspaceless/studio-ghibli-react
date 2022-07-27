import axios from 'axios';

import { apiDataActions } from './api-data-slice';
import processApiData from '../../modules/process-api-data';
import { GHIBLI_API_URL } from '../../config';

const fetchApiData = () => async (dispatch) => {
  const { setError, setIsLoading, setMovies } = apiDataActions;

  const fetchData = async () => {
    dispatch(setIsLoading({ isLoading: true }));
    dispatch(setError({ error: null }));

    const response = await axios.get(GHIBLI_API_URL);
    const processedData = processApiData(response.data);
    return processedData;
  };

  try {
    const apiData = await fetchData();

    dispatch(
      setMovies({
        movies: apiData ?? [],
      }),
    );
  } catch (e) {
    dispatch(setError({ error: e.message }));
  } finally {
    dispatch(setIsLoading({ isLoading: false }));
  }
};

export default fetchApiData;
