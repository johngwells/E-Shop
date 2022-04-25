import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB3Yy-bcM0ha2HvYrJ_XtlQ_0aEGobRs6o',
  authDomain: 'eshop-79855.firebaseapp.com',
  projectId: 'eshop-79855',
  storageBucket: 'eshop-79855.appspot.com',
  messagingSenderId: '337012094380',
  appId: '1:337012094380:web:b1367c263e42794d56f609'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);