import * as Yup from 'yup';
import * as config from './config';

const signinSchema = Yup.object().shape({
  email: Yup.string()
    .email(config.EMAIL_INVALID_MESSAGE)
    .required(config.EMAIL_NOT_PROVIDED_MESSAGE),
  password: Yup.string()
    .min(6, config.PASSWORD_INVALID_LENGTH_MESSAGE)
    .required(config.PASSWORD_NOT_PROVIDED_MESSAGE),
});

export default signinSchema;
