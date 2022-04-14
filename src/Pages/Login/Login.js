import React, { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useFirebase from '../../Shared/useFirebase/useFirebase';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword, error, user
    ] = useSignInWithEmailAndPassword(auth);;

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }

    if (user) {
        navigate(from, { replace: true });
    }
    console.log(error, user)
    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
        console.log(email, password);
    }

    return (
        <div>
            <h1>Please Login</h1>
            <form onSubmit={handleLogin}>
                <input onBlur={handleEmailBlur} type="email" placeholder='Email' id='email' required />
                <input onBlur={handlePasswordBlur} type="password" placeholder='Password' id='password' required />
                <p>{error?.message}</p>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;