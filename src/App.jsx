import { Animator, batch, Fade, Move, ScrollContainer, ScrollPage } from 'react-scroll-motion';
import MoviesLIst from './Components/Movies/MoviesLIst';
import HeaderComponent from './Components/UI/HeaderComponent';

const App = () => {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Move())}>
          <HeaderComponent />
        </Animator>
      </ScrollPage>
      <MoviesLIst />
    </ScrollContainer>
  );
};

export default App;
