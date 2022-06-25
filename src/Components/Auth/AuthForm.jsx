import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/system/Box';

import propTypes from 'prop-types';
import { useState } from 'react';
import { useFormik } from 'formik';

import authSchema from '../../schemas/auth-schema';

const AuthForm = (props) => {
  const { onSubmit, buttonText } = props;
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: authSchema,
    onSubmit,
  });

  const showPasswordClickHandler = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <FormControl component="form" onSubmit={formik.handleSubmit}>
      <TextField
        variant="standard"
        color="secondary"
        margin="normal"
        id="email"
        type="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        variant="standard"
        color="secondary"
        margin="normal"
        id="password"
        type={isPasswordShown ? 'text' : 'password'}
        label="Password"
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={showPasswordClickHandler}
                onMouseDown={showPasswordClickHandler}
              >
                {isPasswordShown ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Box m={1}>
        <Button type="submit" variant="contained" fullWidth>
          {buttonText}
        </Button>
      </Box>
    </FormControl>
  );
};

export default AuthForm;

AuthForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
  buttonText: propTypes.string.isRequired,
};
