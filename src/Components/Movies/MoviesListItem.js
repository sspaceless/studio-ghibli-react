import classes from "./MoviesListItem.module.css";
import Card from "../UI/Card";

const MoviesListItem = (props) => {
  return (
      <Card className={classes["movie"]}>
        <div className={classes["movie__info"]}>
          <div className={classes["movie__info__poster"]}>
            <img src={props.posterUrl} alt="poster" />
          </div>
          <Card className={classes["movie__info__description"]}>
            <h1>{props.title}</h1>
            <h3>{props.originalTitle}</h3>
            <h3>{props.originalTitleRomanised}</h3>
            <p>{props.description}</p>
          </Card>
        </div>
      </Card>
  );
};

export default MoviesListItem;
