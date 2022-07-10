import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import propTypes from 'prop-types';

import {
  wrapperStyles,
  posterWrapperStyles,
  posterStyles,
  infoStyles,
} from './MovieListItemStyles';
import BookmarksButtons from './BookmarksButtons';
import RatingBar from './RatingBar';

const MoviesListItem = (props) => {
  const { id, title, originalTitle, originalTitleRomanised, description, posterUrl } = props;

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
                  <RatingBar />
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item mx={1} display="flex" flexDirection="row" alignItems="center">
                  <BookmarksButtons id={id} />
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
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  originalTitle: propTypes.string.isRequired,
  originalTitleRomanised: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  posterUrl: propTypes.string.isRequired,
};
