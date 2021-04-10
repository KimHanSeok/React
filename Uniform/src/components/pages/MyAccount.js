import React from 'react';
import './SellShirts.css';
import { Link } from 'react-router-dom';

const MyAccount = () => {
    return (    
        <div className='MyAccount'>
            <div><h1>My Account</h1></div>
        <div className='Account Dashboard'>
            <button id = "AccountBtn" type = "submit">Account Dashboard</button>
        </div>
        <div className='Account Information'>
            <Link to ="/AccountInformation">
            <button id = "AccountBtn" type = "submit">Account Information</button>
            </Link>
        </div>
        <div className='Address Book'>
            <button id = "AccountBtn" type = "submit">Address Book</button>
        </div>
        <div className='My Order'>
            <button id = "AccountBtn" type = "submit">My Order</button>
        </div>
        <div className='My Wishlist'>
            <button id = "AccountBtn" type = "submit">My Wishlist</button>
        </div>
        <div className='My Saved Cards'>
            <button id = "AccountBtn" type = "submit">My Saved Cards</button>
        </div>
        </div>
    );
}

export default MyAccount;