import ThemeProvider from '@mui/system/ThemeProvider';
import { CssBaseline } from '@mui/material';

import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, useFirebaseApp } from 'reactfire';
import { getAuth } from 'firebase/auth';

import Header from './components/Header';
import Auth from './components/Auth/Auth';
import defaultTheme from './common/theme';
import MoviesList from './components/Movies/MoviesList';

const App = () => {
  const app = useFirebaseApp();
  const auth = getAuth(app);

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
