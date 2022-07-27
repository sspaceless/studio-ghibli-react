/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = { movies: [], isLoading: false, error: null };

export const apiDataSlice = createSlice({
  name: 'apiData',
  initialState,
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload.movies;
    },
    setIsLoading(state, actions) {
      state.isLoading = actions.payload.isLoading;
    },
    setError(state, actions) {
      state.error = actions.payload.error;
    },
  },
});

export const apiDataActions = apiDataSlice.actions;
