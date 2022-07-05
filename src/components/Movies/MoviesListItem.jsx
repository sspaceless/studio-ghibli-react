import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import StarIcon from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';

import propTypes from 'prop-types';

import {
  wrapperStyles,
  posterWrapperStyles,
  posterStyles,
  infoStyles,
} from './MovieListItemStyles';
import StyledRating from '../UI/StyledRating';

const MoviesListItem = (props) => {
  const { title, originalTitle, originalTitleRomanised, description, posterUrl } = props;

  const previewDescription = description.length > 301
    ? `${description.match(/^.{301}\w*/)}...`
    : description;

  return (
    <Grid container item xs={12} md={9} xl={6}>
      <Card sx={wrapperStyles}>
        <Grid item xs={10} xl={4} sx={posterWrapperStyles}>
          <Card component="img" sx={posterStyles} src={posterUrl} alt="poster" />
        </Grid>
        <Grid container item xl={8}>
          <Grid item>
            <Card sx={infoStyles}>
              <Typography variant="h4">{title}</Typography>
              <Typography variant="h5" mt={1}>
                {originalTitle}
              </Typography>
              <Typography variant="h5" mb={1}>
                {originalTitleRomanised}
              </Typography>
              <Grid container my={1} display="flex" flexDirection="row">
                <Grid item mr={2} display="flex" flexDirection="column" alignItems="center">
                  <StyledRating
                    name="user-feedback"
                    value={0}
                    precision={1}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} />}
                  />
                  <Typography variant="p"> 4.2 (123 votes)</Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item mx={1} display="flex" flexDirection="row" alignItems="center">
                  <IconButton color="inherit">
                    <WatchLaterOutlinedIcon />
                  </IconButton>
                  <IconButton color="inherit">
                    <DoneOutlineIcon />
                  </IconButton>
                  <IconButton color="inherit">
                    <FavoriteBorderIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <Typography variant="p" align="justify">
                {previewDescription}
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default MoviesListItem;

MoviesListItem.propTypes = {
  title: propTypes.string.isRequired,
  originalTitle: propTypes.string.isRequired,
  originalTitleRomanised: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  posterUrl: propTypes.string.isRequired,
};
