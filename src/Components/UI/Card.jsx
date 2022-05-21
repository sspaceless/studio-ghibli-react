import propTypes from 'prop-types';
import classes from './Card.module.css';

const Card = (props) => {
  const { className, children } = props;
  return <div className={`${className} ${classes.card}`}>{children}</div>;
};

export default Card;

Card.propTypes = {
  className: propTypes.string.isRequired,
  children: propTypes.element.isRequired
};
