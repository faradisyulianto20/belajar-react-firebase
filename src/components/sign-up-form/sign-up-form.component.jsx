import { useState } from 'react';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password do not match");
            return
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(
                email, 
                password
            );

            await createUserDocumentFromAuth(user, {displayName});


        } catch(error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use')
            } else {
                console.log('user creation encountered an error', error);   
            }
        }
    }

    const handleChange = (event) => {
        const  {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className='container mx-auto px-4 bg-white dark:bg-gray-800 py-10 shadow-xl rounded-xl space-y-4'>
            <h1 className='text-2xl font-bold text-center'>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
                <FormInput label="Display Name" type='text' required onChange={handleChange} name='displayName' value={displayName} className="input input-bordered w-full"/>
                <FormInput label="Email" type='email' required onChange={handleChange} name='email' value={email} className="input input-bordered w-full"/>
                <FormInput label="Password" type='password' required onChange={handleChange} name='password' value={password} className="input input-bordered w-full"/>
                <FormInput label="Confirm Password" type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} className="input input-bordered w-full"/>
                <button type='submit' className='btn btn-soft btn-accent w-full'>Sign Up</button>
            </form>
            <p className='text-sm text-center text-gray-500 dark:text-gray-300'>
                Already have an account? <a className='link link-primary' href='#'>Sign in</a>
            </p>
        </div>
    )
}

export default SignUpForm