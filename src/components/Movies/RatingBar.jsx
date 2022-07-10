import StarIcon from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography';
import StyledRating from '../UI/StyledRating';

const RatingBar = () => (
  <>
    <StyledRating
      name="user-feedback"
      value={0}
      precision={1}
      emptyIcon={<StarIcon style={{ opacity: 0.55 }} />}
    />
    <Typography variant="p"> 4.2 (123 votes)</Typography>
  </>
);

export default RatingBar;
