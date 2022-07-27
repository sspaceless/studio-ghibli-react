import * as Yup from 'yup';
import * as config from './config';

const signupSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, config.USERNAME_INVALID_LENGTH_MESSAGE)
    .max(30, config.USERNAME_INVALID_LENGTH_MESSAGE)
    .required(config.USERNAME_NOT_PROVIDED_MESSAGE),
  email: Yup.string()
    .email(config.EMAIL_INVALID_MESSAGE)
    .required(config.EMAIL_NOT_PROVIDED_MESSAGE),
  password: Yup.string()
    .min(6, config.PASSWORD_INVALID_LENGTH_MESSAGE)
    .required(config.PASSWORD_NOT_PROVIDED_MESSAGE),
});

export default signupSchema;
