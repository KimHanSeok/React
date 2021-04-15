import React from 'react';
import { Link } from 'react-router-dom';

const MyWishlist = () => {
    return (    
        <div className='MyWishlist'>
          <div><h1>My Wishlist</h1></div>
            <div><h3>Wishlist</h3></div>

            <div className='MyWishlist'>
            <p><input type='text'></input></p>
            <p><input type='text'></input></p>
            <p><input type='text'></input></p>
            <p><input type='text'></input></p>
          </div>

          <div className='Back5'>
            <Link to ="/MyAccount">
            <button id = "DashboardBtn" type = "submit">BACK</button>
            </Link>
            </div>
        </div>
    );
}

export default MyWishlist;