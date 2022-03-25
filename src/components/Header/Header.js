import React from 'react';
import logo from '../../logo.svg'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='container head'>
                <img src={logo} alt="" />
                <div className='nav'>
                    <a href="/home">Home</a>
                    <a href="/Shop">Shop</a>
                    <a href="/cart">Cart</a>
                    <a href="/order">Order</a>
                </div>
            </div>
        </div>
    );
};

export default Header;