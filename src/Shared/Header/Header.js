import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <Link style={{ padding: '20px', textDecoration: 'none' }} to='/'>Home</Link>
            <Link style={{ padding: '20px', textDecoration: 'none' }} to='/about'>About</Link>
            {
                user ? <button style={{ padding: '20px', textDecoration: 'none' }} to="/login" onClick={() => signOut(auth)}>Logout</button> :
                    <Link style={{ padding: '20px', textDecoration: 'none' }} to='/login'>Login</Link>
            }
            <Link style={{ padding: '20px', textDecoration: 'none' }} to='/signup'>Sign Up</Link>
        </div>
    );
};

export default Header;