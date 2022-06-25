import * as Yup from 'yup';

const authSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(6, 'Should be 6 chars minimum.'),
});

export default authSchema;
