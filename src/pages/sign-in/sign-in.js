import { signInWithGooglePopup, createUserDocumentAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from '../../components/sign-up-form/sign-up-form';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentAuth(user);
  }
  return (
    <>
      <label htmlFor='my-modal' className='modal-button btn'>
        signin modal
      </label>
      <input type='checkbox' id='my-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='text-lg font-bold'>
            Register
          </h3>
          {/* <p className='py-4'>
            Register form here
          </p> */}
          <SignUpForm />
          <div className='modal-action'>
            <label htmlFor='my-modal' className='btn' onClick={logGoogleUser}>
              Register
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
