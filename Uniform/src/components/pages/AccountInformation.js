import React from 'react';


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
        </div>
    );
}
 export default AccountInformation;