import React from 'react';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    return (    
        <div className='MyOrders'>
          <div><h1>My Orders</h1></div>
            <div><h3>RECENT ORDERS(최근 주문)</h3></div>

          <div className='View All2'>
            <button id = "DashboardBtn" type = "submit">VIEW ALL</button>
          </div>

          <div className='RecentOders2'>
            <p><input type='text'></input></p>
            <p><input type='text'></input></p>
            <p><input type='text'></input></p>
            <p><input type='text'></input></p>
          </div>

          <div className='Back4'>
            <Link to ="/MyAccount">
            <button id = "DashboardBtn" type = "submit">BACK</button>
            </Link>
            </div>
        </div>
    );
}

export default MyOrders;