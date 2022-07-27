import { useState } from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Slide from '@mui/material/Slide';
import Box from '@mui/system/Box';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import StyledMenu from './UI/StyledMenu';
import logo from '../assets/ghibli-logo.svg';
import { signout } from '../store/auth/auth-actions';

const Header = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const trigger = useScrollTrigger();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const homeButtonClickHandler = () => {
    navigate('/');
  };

  const signinButtonClickHandler = () => {
    navigate('/authentication');
  };

  const signoutButtonClickHandler = async () => {
    handleCloseUserMenu();
    try {
      dispatch(signout());
      navigate('/');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const menu = user ? (
    <>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={user.username} src={`${user.photoURL}`} />
        </IconButton>
      </Tooltip>
      <StyledMenu
        anchorEl={anchorElUser}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={signoutButtonClickHandler}>
          <Typography textAlign="center">Sign out</Typography>
        </MenuItem>
      </StyledMenu>
    </>
  ) : (
    <Button color="inherit" onClick={signinButtonClickHandler}>
      Sign in
    </Button>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar>
          <Toolbar>
            <Button color="inherit" onClick={homeButtonClickHandler}>
              Studio Ghibli
            </Button>
            <Box sx={{ width: 50 }} m={1} component="img" src={logo} alt="Studio Ghibli logo" />
            <Box sx={{ flexGrow: 1 }} />
            {menu}
          </Toolbar>
        </AppBar>
      </Slide>
    </Box>
  );
};

export default Header;
