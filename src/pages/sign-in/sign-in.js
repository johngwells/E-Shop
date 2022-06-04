import SignUpForm from '../../components/sign-up-form/sign-up-form';
import SignInGoogleForm from '../../components/sign-in-google-form.js/sign-in-google-form';

const SignIn = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-4/6'>
        <div className='flex justify-around'>
          <SignInGoogleForm />
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
