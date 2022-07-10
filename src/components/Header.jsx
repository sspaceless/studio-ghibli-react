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

import { useAuth, useUser } from 'reactfire';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

import StyledMenu from './UI/StyledMenu';
import logo from '../assets/ghibli-logo.svg';

const Header = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const trigger = useScrollTrigger();
  const navigate = useNavigate();

  const auth = useAuth();
  const { data: userData } = useUser();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const homeButtonClickHandler = () => {
    navigate('/');
  };

  const signInButtonClickHandler = () => {
    navigate('/authentication');
  };

  const signOutButtonClickHandler = async () => {
    handleCloseUserMenu();
    try {
      await signOut(auth);
      navigate('/');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const menu = userData ? (
    <>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={userData.displayName} src={`${userData.photoURL}`} />
        </IconButton>
      </Tooltip>
      <StyledMenu
        anchorEl={anchorElUser}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={signOutButtonClickHandler}>
          <Typography textAlign="center">Sign out</Typography>
        </MenuItem>
      </StyledMenu>
    </>
  ) : (
    <Button color="inherit" onClick={signInButtonClickHandler}>
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
