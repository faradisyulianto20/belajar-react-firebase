import { useState } from 'react';

import {   signInWithGooglePopup, createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component'
import Button from '../button/button-component'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
                console.log("Login successful:", response);
                console.log("User berhasil login:", response.user.email);
            resetFormFields();
        } catch(error) {
            switch(error.coder) {
                case 'auth/wrong-password':
                    alert("Wrong password")
                    break;
                case 'auth/user-not-found':
                    alert("No user found")
                    break;
                default:
                    alert("Sign-in error")
                    console.log(error);
            }
        }
    }

    const handleChange = (event) => {
        const  {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const signInWithGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    return (
        <div className='container mx-auto px-4 bg-white dark:bg-gray-800 py-10 shadow-xl rounded-xl space-y-4'>
            <h1 className='text-2xl font-bold text-center'>Already have an account?</h1>
            <p  className='text-gray-800 dark:text-gray-400'>Sign up with your email and password</p>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
                <FormInput label="Email" type='email' required onChange={handleChange} name='email' value={email} className="input input-bordered w-full"/>
                <FormInput label="Password" type='password' required onChange={handleChange} name='password' value={password} className="input input-bordered w-full"/>
                <div className='flex flex-col md:flex-row gap-4 justify-center'>
                    <Button type='submit' buttonType='green' >
                        Sign In
                    </Button>
                    <Button type='button' onClick={signInWithGoogleUser} buttonType='green'>
                       Google Sign In
                    </Button>
                </div>
                
            </form>
            
        </div>
    )
}

export default SignInForm