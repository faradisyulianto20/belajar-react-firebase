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
    <div className='flex container mx-auto px-4 py-10 flex-col md:flex-row gap-10 justify-center items-start text-black dark:text-white'>
      <div className='md:w-1/2 space-y-4 bg-base-white dark:bg-gray-800 px-4 py-10 shadow-xl rounded-xl'>
        <h1 className='text-2xl font-bold text-center text-gray-800 dark:text-white'>Sign In Page</h1>
        <button onClick={logGoogleUser} className='btn btn-soft btn-accent w-full'>
          Sign in with Google Popup
        </button>
        <p className='text-sm text-center text-gray-500 dark:text-gray-300'>
          Already have an account? <a className='link link-primary' href='#'>Sign in</a>
        </p>
      </div>

      <div className='md:w-1/2'>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignIn;