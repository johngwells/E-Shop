// import { signInWithEmailAndPassword } from 'firebase/auth';
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

const SignInGoogleForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [error, setError] = useState('');
  const { email, password, submitDisabled } = formFields;

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

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(err);
      }
    }
  };

  return (
    <form onSubmit={onSubmit} className='flex h-screen justify-center '>
      <div className='mt-28 flex flex-col'>
        <h2 className='font-Hubballi text-2xl'>Already have an account?</h2>
        <span className='font-Hubballi'>Sign in with email & password</span>
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
        <div className='mt-4 flex flex-row'>
          <button
            type='submit'
            className='btn w-36 font-Hubballi text-xl'
            disabled={submitDisabled}
          >
            Sign In
          </button>
          <button
            type='button'
            onClick={signInWithGoogle}
            className='btn w-36 font-Hubballi text-xl'
          >
            Google
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignInGoogleForm;
