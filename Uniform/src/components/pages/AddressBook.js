import React from 'react';
import { Link } from 'react-router-dom';

const AddressBook = () => {
    return (    
        <div className='AddressBook'>
            <div><h1>Address Book</h1></div>
            <div><h3>DEFAULT ADDRESSES (기본주소)</h3></div>

            <div className='BillingAddress'>
            <div><h5>DEFAULT BILLING ADDRESS (기본 청구 주소)</h5></div>
            <input type='text'></input>
            <div><h5><button id = "/" type = "submit">Change Billing Address</button></h5></div>
            </div>

            <div className='ShippingAddress'>
            <div><h5>DEFAULT SHIPPING ADDRESS (기본 배송 주소)</h5></div>          
            <input type='text'></input>
            <div><h5><button id = "/" type = "submit">Change Shipping Address</button></h5></div>
            </div>

            <div className='Back3'>
            <Link to ="/MyAccount">
            <button id = "DashboardBtn" type = "submit">BACK</button>
            </Link>
        </div>
        
        </div>
        
        );
}

export default AddressBook;