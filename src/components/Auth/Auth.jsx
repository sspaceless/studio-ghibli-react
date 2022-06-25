import Typography from '@mui/material/Typography';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

import propTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import AuthForm from './AuthForm';
import formWrapperStyles from './AuthStyles';

const Auth = (props) => {
  const { auth } = props;
  const [isUserNew, setIsUserNew] = useState(false);
  const navigate = useNavigate();
  const googleAuthProvider = new GoogleAuthProvider();

  const signInButtonClickHandler = async (values) => {
    const { email, password } = values;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const signUpButtonClickHandler = async (values) => {
    const { email, password } = values;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithGoogleHandler = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
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
    ? { onAuth: signUpButtonClickHandler, buttonText: 'Sign up' }
    : { onAuth: signInButtonClickHandler, buttonText: 'Sign in' };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ height: '100vh' }}
    >
      <Card sx={formWrapperStyles}>
        <AuthForm onSubmit={authProps.onAuth} buttonText={authProps.buttonText} />
        <Box p={1} sx={{ width: '100%' }}>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={signInWithGoogleHandler}
            startIcon={<GoogleIcon />}
          >
            Sign in with Google
          </Button>
        </Box>
        <Typography variant="p"> or </Typography>
        <Box p={1} sx={{ width: '100%' }}>
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

Auth.propTypes = {
  auth: propTypes.oneOfType([propTypes.func, propTypes.object]),
};

Auth.defaultProps = {
  auth: undefined,
};
