import MoviesLIst from "./Components/Movies/MoviesLIst";
import {
  Animator,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  StickyIn,
  Zoom,
} from "react-scroll-motion";
import HeaderComponent from "./Components/UI/HeaderComponent";

function App() {
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
}

export default App;
