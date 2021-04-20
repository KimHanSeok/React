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
            <button id = "AccountBtn" type = "submit">Account Dashboard(계정 게시판)</button>
            </Link>
        </div>

        <div className='AccountInformation'>
            <Link to ="/AccountInformation">
            <button id = "AccountBtn" type = "submit">Account Information(계정 정보)</button>
            </Link>
        </div>

        <div className='AddressBook'>
            <Link to ="/AddressBook">
            <button id = "AccountBtn" type = "submit">Address Book(주소목록)</button>
            </Link>
        </div>

        <div className='MyOrders'>
            <Link to ="/MyOrders">
            <button id = "AccountBtn" type = "submit">My Order(내 주문)</button>
            </Link>
        </div>

        <div className='MyWishlist'>
            <Link to ="/MyWishlist">
            <button id = "AccountBtn" type = "submit">My Wishlish(장바구니)</button>
            </Link>
        </div>

        <div className='MyProductReviews'>
            <Link to ="/MyProductReviews">   
            <button id = "AccountBtn" type = "submit">My Product Reviews(상품 리뷰)</button>
            </Link>
        </div>

        <div className='MySavedCards'>
            <button id = "AccountBtn" type = "submit">My Saved Cards(내 카드)</button>
        </div>

        </div>
        </>
    );
}

export default MyAccount;