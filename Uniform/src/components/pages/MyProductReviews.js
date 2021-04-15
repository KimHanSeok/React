import React from 'react';
import { Link } from 'react-router-dom';

const MyProductReviews = () => {
    return (    
        <div className='MyProductReviews'>
          <div><h1>My Product Reviews</h1></div>

          <div className='Back6'>
            <Link to ="/MyAccount">
                <button id = "DashboardBtn" type = "submit">BACK</button>
            </Link>
          </div>
        </div>

    );
}

export default MyProductReviews;