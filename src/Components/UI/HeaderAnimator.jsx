import propTypes from 'prop-types';
import { Animator, batch, Fade, Move, ScrollPage } from 'react-scroll-motion';

const HeaderAnimator = (props) => {
  const { children } = props;
  return (
    <ScrollPage page={0}>
      <Animator animation={batch(Fade(), Move())}>{children}</Animator>
    </ScrollPage>
  );
};

export default HeaderAnimator;

HeaderAnimator.propTypes = {
  children: propTypes.element.isRequired
};
