import React from 'react'
import { Typography, TextField, Button } from '@mui/material';
import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { registerUser } from '../State/Authenticate/Action';

const initalvalues = {
  fullName: '',
  email: '',
  password: '',
  role: 'ROLE_CUSTOMER'
}

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    console.log('form values', values);
    dispatch(registerUser({ userData: values, navigate }));
  }
  return (
    <div>
      <Typography variant='h5' className='text-center'>
        Register
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initalvalues}>
        <Form>
          <Field
            as={TextField}
            name='fullName'
            label='Full Name'
            fullWidth
            variant='outlined'
            margin='normal'
          />
          <Field
            as={TextField}
            name='email'
            label='Email'
            fullWidth
            variant='outlined'
            margin='normal'
          />
          <Field
            as={TextField}
            name='password'
            label='Password'
            type='password'
            fullWidth
            variant='outlined'
            margin='normal'
          />

          <Field as={Select}
            fullWidth
            margin='normal'
            labelId="role-simple-select-label"
            id="role-simple-select"
            name='role'
          // value={role}
          // onChange={handleChange}
          >
            <MenuItem value={'ROLE_CUSTOMER'}>Customer</MenuItem>
            <MenuItem value={'ROLE_RESTAURANT_OWNER'}>Restaurant Owner</MenuItem>
          </Field>
          <Button sx={{ mt: 2, padding: '1rem' }} fullWidth type='submit' variant='contained'>Register</Button>
        </Form>
      </Formik>
      <Typography variant='body2' align='center' sx={{ mt: 3 }}>
        If have an account already?
        <Button size='small' onClick={() => navigate('/account/login')}>
          Login
        </Button>
      </Typography>

    </div>
  )
}

export default RegisterForm
