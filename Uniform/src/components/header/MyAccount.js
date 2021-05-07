import React from 'react';
import "./MyAccount.css";
import { Link } from 'react-router-dom';

const MyAccount = () => {
    return (   
        <> 
        <div className = "header2">
            <br/>
            <div className='header2-font'>
                <h1>My Account</h1>
                <div className='AccountDashboard'>
                    <div className = 'Account-col'>
                        <Link to ="/AccountDashboard">
                            <button id = "AccountBtn" type = "submit">Account Dashboard<br/><br/>계정 게시판</button>
                        </Link>
                    </div>
                    <div className = 'Account-col'>
                        <Link to ="/AccountInformation">
                            <button id = "AccountBtn" type = "submit">Account Information<br/><br/>계정 정보</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default MyAccount;