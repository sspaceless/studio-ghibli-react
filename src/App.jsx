import { CssBaseline } from '@mui/material';
import ThemeProvider from '@mui/system/ThemeProvider';

import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { checkAuth } from './store/auth/auth-actions';
import fetchApiData from './store/api-data/api-data-actions';
import defaultTheme from './common/theme';
import MoviesList from './components/Movies/MoviesList';
import Header from './components/Header';
import Auth from './components/Auth/Auth';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApiData());
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/authentication" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
