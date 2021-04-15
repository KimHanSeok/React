import React from 'react';
import './SellShirts.css';
import { Link } from 'react-router-dom';

const MyAccount = () => {
    return (   
        <> 
        <div className='MyAccount'>
            <div><h1>My Account</h1></div>

        <div className='AccountDashboard'>
            <Link to ="/AccountDashboard">
            <button id = "AccountBtn" type = "submit">Account Dashboard</button>
            </Link>
        </div>

        <div className='AccountInformation'>
            <Link to ="/AccountInformation">
            <button id = "AccountBtn" type = "submit">Account Information</button>
            </Link>
        </div>

        <div className='AddressBook'>
            <Link to ="/AddressBook">
            <button id = "AccountBtn" type = "submit">Address Book</button>
            </Link>
        </div>

        <div className='MyOrders'>
            <Link to ="/MyOrders">
            <button id = "AccountBtn" type = "submit">My Order</button>
            </Link>
        </div>

        <div className='MyWishlist'>
            <Link to ="/MyWishlist">
            <button id = "AccountBtn" type = "submit">My Wishlish</button>
            </Link>
        </div>

        <div className='MyProductReviews'>
            <Link to ="/MyProductReviews">   
            <button id = "AccountBtn" type = "submit">My Product Reviews</button>
            </Link>
        </div>

        <div className='MySavedCards'>
            <button id = "AccountBtn" type = "submit">My Saved Cards</button>
        </div>

        </div>
        </>
    );
}

export default MyAccount;