import { Route, Routes } from 'react-router';
import { getAuth } from 'firebase/auth';
import { AuthProvider, useFirebaseApp } from 'reactfire';
import Header from './Components/Header';
import MoviesList from './Components/Movies/MoviesList';
import Auth from './Components/Auth/Auth';
import GhibliLogo from './Components/GhibliLogo';

const App = () => {
  const app = useFirebaseApp();
  const auth = getAuth(app);

  const content = (
    <>
      <GhibliLogo />
      <MoviesList />
    </>
  );

  return (
    <AuthProvider sdk={auth}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={content}
        />
        <Route path="/authentication" element={<Auth auth={auth} />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
