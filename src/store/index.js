import { configureStore } from '@reduxjs/toolkit';
import { moviesDataSlice } from './movies-data-slice';

const store = configureStore({
  reducer: { moviesData: moviesDataSlice.reducer },
});

export default store;
