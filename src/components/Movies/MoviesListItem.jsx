import propTypes from 'prop-types';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

import { Typography } from '@mui/material';
import {
  wrapperStyles,
  posterWrapperStyles,
  posterStyles,
  infoWrapperStyles,
  infoStyles,
} from './MovieListItemStyles';

const MoviesListItem = (props) => {
  const { title, originalTitle, originalTitleRomanised, description, posterUrl } = props;

  const previewDescription = (description.length > 301)
    ? `${description.match(/^.{301}\w*/)}...`
    : description;

  return (
    <Grid container item xs={12} md={9} xl={6}>
      <Card sx={wrapperStyles}>
        <Grid item xs={10} xl={5} sx={posterWrapperStyles}>
          <Card component="img" sx={posterStyles} src={posterUrl} alt="poster" />
        </Grid>
        <Grid item xs={12} xl={7} sx={infoWrapperStyles}>
          <Card sx={infoStyles}>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="h5" pt={2}>{originalTitle}</Typography>
            <Typography variant="h5" pb={2}>{originalTitleRomanised}</Typography>
            <Typography variant="p" align="justify">{previewDescription}</Typography>
          </Card>
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
