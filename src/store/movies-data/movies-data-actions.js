import { moviesDataActions, initialState } from './movies-data-slice';

const moviesDataData = () => async (dispatch) => {
  const { setError, setIsLoading, setMoviesData } = moviesDataActions;

  const fetchData = async () => {
    dispatch(setIsLoading({ isLoading: true }));
    dispatch(setError({ error: null }));

    return undefined ?? initialState.data;
  };

  try {
    const moviesData = await fetchData();

    dispatch(
      setMoviesData({
        movies: moviesData,
      }),
    );
  } catch (e) {
    dispatch(setError({ error: e.message }));
  } finally {
    dispatch(setIsLoading({ isLoading: false }));
  }
};

export default moviesDataData;
