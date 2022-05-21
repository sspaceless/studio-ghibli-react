import propTypes from 'prop-types';
import Card from '../UI/Card';
import classes from './MoviesListItem.module.css';

const MoviesListItem = (props) => {
  const { title, originalTitle, originalTitleRomanised, description, posterUrl } = props;
  return (
    <Card className={classes.movie}>
      <div className={classes.movie__info}>
        <div className={classes.movie__info__poster}>
          <img className={classes['hvr-grow-shadow']} src={posterUrl} alt="poster" />
        </div>
        <Card className={`${classes.movie__info__description} ${classes['hvr-grow-shadow']}`}>
          <h1>{title}</h1>
          <h3>{originalTitle}</h3>
          <h3>{originalTitleRomanised}</h3>
          <p>{description}</p>
        </Card>
      </div>
    </Card>
  );
};

export default MoviesListItem;

MoviesListItem.propTypes = {
  title: propTypes.string.isRequired,
  originalTitle: propTypes.string.isRequired,
  originalTitleRomanised: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  posterUrl: propTypes.string.isRequired
};
