import React, { useState } from 'react';
import useFirebase from '../../Shared/useFirebase/useFirebase';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')

    /*  const [user, error, loading] = useAuthState(auth)
     const { createUserWithEmailAndPassword } = useFirebase() */
    const [
        createUserWithEmailAndPassword,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const signupSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
        console.log(error);
    }
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={signupSubmit}>
                <input type="email" name="email" />
                <input type="password" name="password" />
                <p>{error?.message}</p>
                <input type="submit" value="Sign up" />
            </form>
        </div>
    );
};

export default Signup;