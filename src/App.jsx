import ThemeProvider from '@mui/system/ThemeProvider';
import { CssBaseline } from '@mui/material';

import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuth } from 'firebase/auth';
import { AuthProvider, useFirebaseApp } from 'reactfire';

import Header from './components/Header';
import Auth from './components/Auth/Auth';
import MoviesList from './components/Movies/MoviesList';
import defaultTheme from './common/theme';
import fetchMoviesData from './store/movies-data-actions';

const App = () => {
  const app = useFirebaseApp();
  const auth = getAuth(app);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesData());
  }, [dispatch]);

  return (
    <AuthProvider sdk={auth}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<MoviesList />} />
            <Route path="/authentication" element={<Auth auth={auth} />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
