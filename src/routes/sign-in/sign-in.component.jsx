import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import { 
  signInWithGooglePopup, 
  createUserDocumentFromAuth, 
  signInWithGoogleRedirect, 
  auth 
} from "../../utils/firebase/firebase.utils";

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import Button from '../../components/button/button-component'

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
        <h1 className='text-2xl font-bold text-center text-gray-800 dark:text-white'>I already have an account</h1>
        <p className='text-gray-800 dark:text-gray-400'>Sign in with your email and password</p>
          <form className='flex flex-col'>
            <label className='label'><span className='text-label'>Email</span></label>
            <input className='input w-full'></input>
            <label className='label'><span className='text-label'>Password</span></label>
            <input className='input w-full'></input>
            <div className='flex gap-10 py-4 justify-evenly'>
              <Button type='submit' buttonType='green' className='w-auto'>
                Sign in
              </Button>
              <Button onClick={logGoogleUser} buttonType='green' className='w-auto'>
                Sign in with Google Popup
              </Button>
            </div>  
          </form>
      </div>

      <div className='md:w-1/2'>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignIn;