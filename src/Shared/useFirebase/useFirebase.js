import React from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const useFirebase = () => {
    const [user, loading] = useAuthState(auth);
    const [
        createUserWithEmailAndPassword,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [
        signInWithEmailAndPassword,
    ] = useSignInWithEmailAndPassword(auth);


    /* const handlesignup = (e, email, password) => {
        // e.preventDefault()
        createUserWithEmailAndPassword(email, password)
        console.log(user);
    } */

    return { createUserWithEmailAndPassword, /* handlesignup, */ signInWithEmailAndPassword, user }
};

export default useFirebase;