import ThemeProvider from '@mui/system/ThemeProvider';
import { CssBaseline } from '@mui/material';

import { getAuth } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFirestore } from 'firebase/firestore';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, FirestoreProvider, useFirebaseApp } from 'reactfire';

import Auth from './components/Auth/Auth';
import Header from './components/Header';
import MoviesList from './components/Movies/MoviesList';
import defaultTheme from './common/theme';
import fetchMoviesData from './store/movies-data-actions';

const App = () => {
  const app = useFirebaseApp();
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesData());
  }, [dispatch]);

  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestore}>
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
      </FirestoreProvider>
    </AuthProvider>
  );
};

export default App;
