import React from 'react';
import './SellShirts.css';
import { Link } from 'react-router-dom';

const AcccountDashboard = () => {
    return (    
        <div className='AcccountDashboard'>
            <div><h1>ACCOUNT DASHBOARD</h1></div>
            <div><h2>Hi, Bro!!!<p>This is where you can check your information.</p></h2></div>
            <div><h3>RECENT ORDERS(최근 주문)</h3></div>
            <div className='View All'>
            <button id = "DashboardBtn" type = "submit">VIEW ALL</button>
        </div>

        <div className='RecentOders'>
            <p><input type='text'></input></p>
            <p><input type='text'></input></p>
            <p><input type='text'></input></p>
            <p><input type='text'></input></p>
        </div>

        <div className='Back'>
            <Link to ="/MyAccount">
            <button id = "DashboardBtn" type = "submit">BACK</button>
            </Link>
         </div>

        </div>
        );
}

export default AcccountDashboard;