import React from 'react';
import { Link } from 'react-router-dom';

const MyAccount = () => {
    return (   
        <> 
        <div className='1'>
            <div><h1>My Account</h1></div>
            <br /><br /><br /><br /><br />
        <div className='AccountDashboard'>
            <Link to ="/AccountDashboard">
            <button id = "AccountBtn" type = "submit">Account Dashboard(계정 게시판)</button>
            </Link>
        </div>

        <div className='2'>
            <Link to ="/AccountInformation">
            <button id = "AccountBtn" type = "submit">Account Information(계정 정보)</button>
            </Link>
        </div>

        </div>
        </>
    );
}

export default MyAccount;