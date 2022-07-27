/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = { data: [], isLoading: false, error: null };

export const moviesDataSlice = createSlice({
  name: 'moviesData',
  initialState,
  reducers: {
    setMoviesData(state, action) {
      state.data = action.payload.data;
    },
    setIsLoading(state, actions) {
      state.isLoading = actions.payload.isLoading;
    },
    setError(state, actions) {
      state.error = actions.payload.error;
    },
  },
});

export const moviesDataActions = moviesDataSlice.actions;
