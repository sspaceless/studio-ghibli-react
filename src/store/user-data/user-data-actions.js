import { initialState, userDataActions } from './user-data-slice';

const fetchUserData = () => async (dispatch) => {
  const { setError, setIsLoading, setUserData } = userDataActions;

  const fetchData = async () => {
    dispatch(setIsLoading({ isLoading: true }));
    dispatch(setError({ error: null }));

    return undefined ?? initialState.data;
  };

  try {
    const userData = await fetchData();
    dispatch(setUserData({ data: userData }));
  } catch (e) {
    dispatch(setError({ error: e.message }));
  } finally {
    dispatch(setIsLoading({ isLoading: false }));
  }
};

export default fetchUserData;
