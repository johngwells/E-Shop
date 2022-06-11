import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentAuth
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
  submitDisabled: true
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [error, setError] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');
  const { displayName, email, password, confirmPassword, submitDisabled } =
    formFields;

  const handleChange = e => {
    setError('');
    setPasswordMatchError('');

    let textValid = e.target.value ? true : false;
    let submitValid =
      displayName && email && password && confirmPassword && textValid;
    const { name, value } = e.target;

    setFormFields({
      ...formFields,
      submitDisabled: !submitValid,
      [name]: value
    });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMatchError('Passwords must match');
    }

    if (password.length < 6) {
      setError('Password must be 6 characters or greater');
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentAuth(user, { displayName });
      resetFormFields();
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('Email already in use');
      }
      console.log('error', err);
    }
  };

  return (
    <form onSubmit={onSubmit} className='flex h-screen justify-center '>
      <div className='mt-28 flex flex-col'>
        <h2 className='font-Hubballi text-2xl'>
          <b>Don't have an account?</b>
        </h2>
        <span className='font-Hubballi'>Sign up with email & password</span>
        <div className='form-control w-72'>
          <label className='input-group mt-4' />
          <FormInput
            label='Display Name'
            type='text'
            required
            placeholder='Your Name'
            className='input input-bordered'
            onChange={handleChange}
            name='displayName'
            value={displayName}
          />
          <FormInput
            label='Email'
            type='email'
            required
            placeholder='info@site.com'
            className='input input-bordered'
            onChange={handleChange}
            name='email'
            value={email}
          />
          <FormInput
            label='Password'
            type='password'
            placeholder='password'
            className='input input-bordered'
            onChange={handleChange}
            name='password'
            value={password}
          />
          {error ? <div>{error}</div> : <></>}
          <FormInput
            label='Confirm Password'
            type='password'
            placeholder='confirm password'
            className='input input-bordered'
            onChange={handleChange}
            name='confirmPassword'
            value={confirmPassword}
          />
          {passwordMatchError ? <>{passwordMatchError}</> : <></>}
        </div>
        <button
          type='submit'
          className='btn mt-4 w-72 font-Hubballi text-xl'
          disabled={submitDisabled}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
