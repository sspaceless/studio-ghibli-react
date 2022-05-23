import propTypes from 'prop-types';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';

const AuthForm = (props) => {
  const { onSubmit, buttonText } = props;

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <label htmlFor="email">Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />

        <label htmlFor="password">Password</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" />

        <button type="submit">{buttonText}</button>
      </Form>
    </Formik>
  );
};

export default AuthForm;

AuthForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
  buttonText: propTypes.string.isRequired,
};
