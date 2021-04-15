import React from 'react';
import './SellShirts.css';
import { Link } from 'react-router-dom';

const AccountInformation = () => {
    return (  
        <div className="AccountInformation">
            <div><h1>Account Information(계정 정보)</h1></div>

        <p>First Name</p>   
        <div className='FName'>
            <input type='text'></input>
        </div>

        <p>Last Name</p>   
        <div className='LName'>
            <input type='text'></input>
        </div>

        <p>E-mail Address</p>   
        <div className='EmailAddress'>
            <input type='text'></input>
        </div>
        
        <p>Current Password</p>   
        <div className='CPassword'>
            <input type='text'></input>
        </div>

        <p>New Password</p>   
        <div className='NPassword'>
            <input type='text'></input>
        </div>
        <p>Confirm New Password</p>   
        <div className='CNPassword'>
            <input type='text'></input>
        </div>

        <div className='Save'>
        <button id = "SaveBtn" type = "submit">Save</button>
        </div>

        <div className='Back2'>
            <Link to ="/MyAccount">
            <button id = "DashboardBtn" type = "submit">BACK</button>
            </Link>
        </div>

        </div>
    );
}
 export default AccountInformation;