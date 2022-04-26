import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentAuth
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
  submitDisabled: true
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword, submitDisabled } =
    formFields;

  console.log(formFields);

  const handleChange = e => {
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
    if (password !== confirmPassword) return;

    // if (!submitDisabled) {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        await createUserDocumentAuth(user, { displayName });
        resetFormFields();
      } catch (err) {
        console.log('error', err);
      }
    // }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='form-control'>
        <label className='input-group' />
        <span>Display Name</span>
        <input
          type='text'
          required
          placeholder='Your Name'
          className='input input-bordered'
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />
        <span>Email</span>
        <input
          type='email'
          required
          placeholder='info@site.com'
          className='input input-bordered'
          onChange={handleChange}
          name='email'
          value={email}
        />
        <span>Password</span>
        <input
          type='password'
          placeholder='your password'
          className='input input-bordered'
          onChange={handleChange}
          name='password'
          value={password}
        />
        <span>Confirm Password</span>
        <input
          type='password'
          placeholder='confirm password'
          className='input input-bordered'
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
      </div>

      {/* <div className='modal-action'>
        <button id='my-modal'> */}
          <button type='submit' htmlFor='my-modal' className='btn' disabled={submitDisabled}>
            Register
          </button>
        {/* </button>
      </div> */}
    </form>
  );
};

export default SignUpForm;
