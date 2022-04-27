import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import {
  signInAuthUserWithEmailAndPassword,
  createUserDocumentAuth,
  signInWithGooglePopup
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
  submitDisabled: true
};

const SignUpGoogleForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [error, setError] = useState('');
  const { email, password, submitDisabled } = formFields;

  console.log(formFields);

  const handleChange = e => {
    setError('');

    let textValid = e.target.value ? true : false;
    let submitValid = email && password && textValid;
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

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentAuth(user);
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (password.length < 6) {
      setError('Password must be 6 characters or greater');
    }

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (err) {
      console.log('error', err);
    }
  };

  return (
    <form onSubmit={onSubmit} className='flex h-screen justify-center '>
      <div className='mt-28 flex flex-col'>
        <h2>Already have an account?</h2>
        <span>Sign in with email & password</span>
        <div className='form-control w-72'>
          <label className='input-group mt-4' />
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
        </div>
        <div className='flex flex-row'>
          <button type='submit' className='btn w-36' disabled={submitDisabled}>
            Sign In
          </button>
          <button onClick={signInWithGoogle} className='btn w-36'>
            Google
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUpGoogleForm;
