import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';

import { useSelector } from 'react-redux';
import propTypes from 'prop-types';

import { FAVORITE_BOOKMARK_TYPE, WATCHED_BOOKMARK_TYPE, WATCH_LATER_BOOKMARK_TYPE } from '../config';

const BookmarksButtons = (props) => {
  const { id } = props;

  const userData = useSelector((state) => state.userData.data);
  const { bookmarks } = userData;

  const isInWatchLater = bookmarks?.[WATCH_LATER_BOOKMARK_TYPE]?.includes(id);
  const isWatched = bookmarks?.[WATCHED_BOOKMARK_TYPE]?.includes(id);
  const isFavorite = bookmarks?.[FAVORITE_BOOKMARK_TYPE]?.includes(id);

  // const setBookmark = async (type) => {
  //   if (!user) {
  //     return;
  //   }

  //   try {
  //     await setDoc(userDocRef, newBookmark, { merge: true });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const watchLaterButtonHandler = async () => {
    // await setBookmark(WATCH_LATER_BOOKMARK_TYPE);
  };

  const watchedButtonHandler = async () => {
    // await setBookmark(WATCHED_BOOKMARK_TYPE);
  };

  const favoriteButtonHandler = async () => {
    // await setBookmark(FAVORITE_BOOKMARK_TYPE);
  };

  const watchLaterIcon = isInWatchLater ? <WatchLaterIcon /> : <WatchLaterOutlinedIcon />;
  const watchedIcon = isWatched ? <DoneIcon /> : <DoneOutlineIcon />;
  const favoriteIcon = isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />;

  return (
    <>
      <IconButton color="inherit" onClick={watchLaterButtonHandler}>
        {watchLaterIcon}
      </IconButton>
      <IconButton color="inherit" onClick={watchedButtonHandler}>
        {watchedIcon}
      </IconButton>
      <IconButton color="inherit" onClick={favoriteButtonHandler}>
        {favoriteIcon}
      </IconButton>
    </>
  );
};

export default BookmarksButtons;

BookmarksButtons.propTypes = {
  id: propTypes.string.isRequired,
};
