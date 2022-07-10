import { configureStore } from '@reduxjs/toolkit';

import { userDataSlice } from './user-data-slice';
import { moviesDataSlice } from './movies-data-slice';

const store = configureStore({
  reducer: { moviesData: moviesDataSlice.reducer, userData: userDataSlice.reducer },
});

export default store;
