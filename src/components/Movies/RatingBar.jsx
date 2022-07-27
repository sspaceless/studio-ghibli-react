import StarIcon from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography';

// import propTypes from 'prop-types';
// import { useSelector } from 'react-redux';

import StyledRating from '../UI/StyledRating';

const RatingBar = (/* props */) => {
  // const { id } = props;

  // const moviesData = useSelector((state) => state.moviesData.data);
  // const currentMovieData = moviesData?.[id];

  const ratingChangeHandler = async (/* event, value */) => {
    // if (!user) {
    //   return;
    // }
    // const movieDocRef = doc(firestore, MOVIES_COLLECTION, id);
    // const newVote = {
    //   [VOTES_FIELD]: {
    //     [user.uid]: value,
    //   },
    // };
    // try {
    //   await setDoc(movieDocRef, newVote, { merge: true });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      <StyledRating
        name="user-feedback"
        value={0}
        onChange={ratingChangeHandler}
        precision={1}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} />}
      />
      <Typography variant="p"> 4.2 (123 votes)</Typography>
    </>
  );
};

export default RatingBar;

// RatingBar.propTypes = {
//   id: propTypes.string.isRequired,
// };
