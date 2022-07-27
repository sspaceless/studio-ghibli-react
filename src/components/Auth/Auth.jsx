import Typography from '@mui/material/Typography';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux/es/exports';
import { useState } from 'react';

import { signinWithEmailAndPassword, signupWithEmailAndPassword } from '../../store/auth/auth-actions';
import formWrapperStyles from './AuthStyles';
import AuthForm from './AuthForm';

const Auth = () => {
  const [isUserNew, setIsUserNew] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signupButtonClickHandler = async (values) => {
    const { username, email, password } = values;
    try {
      dispatch(signupWithEmailAndPassword(username, email, password));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const signinButtonClickHandler = async (values) => {
    const { email, password } = values;
    try {
      dispatch(signinWithEmailAndPassword(email, password));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const signinWithGoogleHandler = async () => {
    try {
      // await signinWithPopup(auth, googleAuthProvider);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const changeAuthMethodButtonHandler = () => {
    setIsUserNew((prevState) => !prevState);
  };

  const changeAuthMethodButtonText = isUserNew ? 'Sign In' : 'Create  account';
  const authProps = isUserNew
    ? { onAuth: signupButtonClickHandler, buttonText: 'Sign up' }
    : { onAuth: signinButtonClickHandler, buttonText: 'Sign in' };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ height: '100vh' }}
    >
      <Card sx={formWrapperStyles}>
        <AuthForm
          isUserNew={isUserNew}
          onSubmit={authProps.onAuth}
          buttonText={authProps.buttonText}
        />
        <Box m={1} sx={{ width: '100%' }}>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={signinWithGoogleHandler}
            startIcon={<GoogleIcon />}
          >
            Sign in with Google
          </Button>
        </Box>
        <Typography variant="p"> or </Typography>
        <Box m={1} sx={{ width: '100%' }}>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={changeAuthMethodButtonHandler}
          >
            {changeAuthMethodButtonText}
          </Button>
        </Box>
      </Card>
    </Grid>
  );
};

export default Auth;
