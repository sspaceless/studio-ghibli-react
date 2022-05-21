import { ScrollContainer } from 'react-scroll-motion';
import MoviesLIst from './Components/Movies/MoviesLIst';
import HeaderAnimator from './Components/UI/HeaderAnimator';
import HeaderComponent from './Components/UI/HeaderComponent';

const App = () => {
  return (
    <ScrollContainer>
      <HeaderAnimator>
        <HeaderComponent />
      </HeaderAnimator>
      <MoviesLIst />
    </ScrollContainer>
  );
};

export default App;
