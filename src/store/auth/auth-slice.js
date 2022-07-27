/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
    },
    setIsLoading(state, actions) {
      state.isLoading = actions.payload.isLoading;
    },
    setError(state, actions) {
      state.error = actions.payload.error;
    },
  },
});

export const authActions = authSlice.actions;
