import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#004d69',
  },
  '& .MuiRating-iconHover': {
    color: '#004d69',
  },
});

export default StyledRating;
