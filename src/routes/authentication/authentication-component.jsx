import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import { 
  createUserDocumentFromAuth, 
  signInWithGoogleRedirect, 
  auth 
} from "../../utils/firebase/firebase.utils";

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import SignInForm from '../../components/sign-in-form/sign-in-form.component'
import Button from '../../components/button/button-component'

const Authentication = () => {

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

  return (
    <div className='flex container mx-auto px-4 py-10 flex-col md:flex-row gap-10 justify-center items-center md:items-start text-black dark:text-white'>
      <div className='md:w-1/2'>
        <SignInForm />
      </div>
      <div className='md:w-1/2'>
        <SignUpForm />
      </div>
    </div>
  );
};

export default Authentication;