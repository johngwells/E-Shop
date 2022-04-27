import { signInWithGooglePopup, createUserDocumentAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from '../../components/sign-up-form/sign-up-form';
import SignInGoogleForm from "../../components/sign-in-google-form.js/sign-in-google-form";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentAuth(user);
  }

  return (
    <div className="flex justify-center">
    <div className="w-4/6">
      {/* <label htmlFor='my-modal' className='modal-button btn'>
        signin modal
      </label>
      <input type='checkbox' id='my-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='text-lg font-bold'>
            Register
          </h3>
          <p className='py-4'>
            Register form here
          </p>
          <SignUpForm />
          <div className='modal-action'>
            <label htmlFor='my-modal' className='btn' onClick={logGoogleUser}>
              Register
            </label>
          </div>
        </div>
      </div> */}
      <div className="flex justify-around">
        <SignInGoogleForm />
        <SignUpForm />
      </div>
    </div>

    </div>
  );
};

export default SignIn;
