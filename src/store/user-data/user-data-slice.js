/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  data: {
    bookmarks: {},
  },
  isLoading: false,
  error: null,
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData(state, action) {
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

export const userDataActions = userDataSlice.actions;
