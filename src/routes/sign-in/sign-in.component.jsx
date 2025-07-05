import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import { 
  signInWithGooglePopup, 
  createUserDocumentFromAuth, 
  signInWithGoogleRedirect, 
  auth 
} from "../../utils/firebase/firebase.utils";

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'

const SignIn = () => {

  useEffect(() => {
    const fetchRedirectResult = async () => {
      const response = await getRedirectResult(auth);
      console.log(response);
      if (response) {
        console.log('Redirect result:', response);
        await createUserDocumentFromAuth(response.user);
      } else {
        console.log('error anying');
      }
    };
    fetchRedirectResult();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google Popup
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;