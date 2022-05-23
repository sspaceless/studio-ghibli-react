import { Route, Routes } from 'react-router';
import { getAuth } from 'firebase/auth';
import { AuthProvider, useFirebaseApp } from 'reactfire';
import Header from './Components/Header';
import GhibliLogo from './Components/GhibliLogo';
import MoviesList from './Components/Movies/MoviesList';
import Auth from './Components/Auth/Auth';

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
