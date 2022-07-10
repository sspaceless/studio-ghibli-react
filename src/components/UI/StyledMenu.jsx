import propTypes from 'prop-types';
import Menu from '@mui/material/Menu';

const StyledMenu = (props) => {
  const { children, anchorEl, open, onClose } = props;

  return (
    <Menu
      id="menu-appbar"
      sx={{ mt: '45px' }}
      keepMounted
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={open}
      onClose={onClose}
    >
      {children}
    </Menu>
  );
};

export default StyledMenu;

StyledMenu.propTypes = {
  children: propTypes.element.isRequired,
  anchorEl: propTypes.oneOfType([propTypes.element, propTypes.object]),
  // eslint-disable-next-line react/forbid-prop-types
  open: propTypes.any,
  onClose: propTypes.func,
};

StyledMenu.defaultProps = {
  anchorEl: undefined,
  open: undefined,
  onClose: undefined,
};
