import { useState } from 'react';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const handleChange = e => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmit = () => {
    console.log('Submitted');
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
          required
          placeholder='your password'
          className='input input-bordered'
          onChange={handleChange}
          name='password'
          value={password}
        />
        <span>Confirm Password</span>
        <input
          type='password'
          required
          placeholder='confirm password'
          className='input input-bordered'
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
      </div>
      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
