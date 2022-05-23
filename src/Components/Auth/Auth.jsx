import propTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import GoogleButton from 'react-google-button';
import Card from '../UI/Card';
import classes from './Auth.module.css';
import AuthForm from './AuthForm';

const Auth = (props) => {
  const { auth } = props;
  const [isUserNew, setIsUserNew] = useState(false);
  const navigate = useNavigate();
  const googleAuthProvider = new GoogleAuthProvider();

  const signInButtonClickHandler = (values) => {
    const { email, password } = values;
    signInWithEmailAndPassword(auth, email, password);
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
    ? { onAuth: signInButtonClickHandler, buttonText: 'Sign up' }
    : { onAuth: signUpButtonClickHandler, buttonText: 'Sign in' };

  return (
    <div className={classes['auth-window']}>
      <Card className={classes.auth}>
        <>
          <AuthForm onSubmit={authProps.onAuth} buttonText={authProps.buttonText} />
          <GoogleButton onClick={signInWithGoogleHandler} />
          <p> or </p>
          <button type="button" onClick={changeAuthMethodButtonHandler}>
            {changeAuthMethodButtonText}
          </button>
        </>
      </Card>
    </div>
  );
};

export default Auth;

Auth.propTypes = {
  auth: propTypes.oneOfType([
    propTypes.func,
    propTypes.object,
  ]),
};

Auth.defaultProps = {
  auth: undefined,
};
