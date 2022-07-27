import axios from 'axios';

import { authActions, initialState } from './auth-slice';
import api from '../../api/axios-backend-instance';

const { setUser, setIsLoading, setError } = authActions;

const setTokens = (tokens) => {
  const { accessToken, refreshToken } = tokens;
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};

export const signupWithEmailAndPassword = (username, email, password) => async (dispatch) => {
  const fetchData = async () => {
    dispatch(setIsLoading({ isLoading: true }));
    dispatch(setError({ error: null }));

    const data = { username, email, password };
    return api.post('auth/signup/local', data) ?? initialState;
  };

  try {
    const { data } = await fetchData();
    setTokens(data.tokens);
    dispatch(setUser({ user: data }));
  } catch (e) {
    dispatch(setError({ error: e.message }));
  } finally {
    dispatch(setIsLoading({ isLoading: false }));
  }
};

export const signinWithEmailAndPassword = (email, password) => async (dispatch) => {
  const fetchData = async () => {
    dispatch(setIsLoading({ isLoading: true }));
    dispatch(setError({ error: null }));

    const data = { email, password };
    return api.post('auth/signin/local', data);
  };

  try {
    const { data } = await fetchData();
    setTokens(data.tokens);
    dispatch(setUser({ user: data }));
  } catch (e) {
    dispatch(setError({ error: e.message }));
  } finally {
    dispatch(setIsLoading({ isLoading: false }));
  }
};

export const checkAuth = () => async (dispatch) => {
  const refreshToken = localStorage.getItem('refreshToken');
  const requestUrl = `${process.env.REACT_APP_API_BASE_URL}auth/refresh`;
  const headers = { Authorization: `Bearer ${refreshToken}` };

  dispatch(setIsLoading({ isLoading: true }));
  try {
    const { data } = await axios.get(requestUrl, { headers });
    setTokens(data.tokens);
    dispatch(setUser({ user: data }));
  } catch (e) {
    dispatch(setError({ error: e.message }));
  } finally {
    dispatch(setIsLoading({ isLoading: false }));
  }
};

export const signout = () => async (dispatch) => {
  dispatch(setIsLoading({ isLoading: true }));
  try {
    await api.get('auth/signout');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    dispatch(setUser({ user: null }));
  } catch (e) {
    dispatch(setError({ error: e.message }));
  } finally {
    dispatch(setIsLoading({ isLoading: false }));
  }
};
