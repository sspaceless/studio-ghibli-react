import { configureStore } from '@reduxjs/toolkit';

import { moviesDataSlice } from './movies-data/movies-data-slice';
import { userDataSlice } from './user-data/user-data-slice';
import { apiDataSlice } from './api-data/api-data-slice';
import { authSlice } from './auth/auth-slice';

const store = configureStore({
  reducer: {
    moviesData: moviesDataSlice.reducer,
    userData: userDataSlice.reducer,
    apiData: apiDataSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
