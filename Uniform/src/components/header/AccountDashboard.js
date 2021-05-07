import React from 'react';
import './AccountDashboard.css';
import { Link } from 'react-router-dom';

const AcccountDashboard = () => {
    return (    
        <div className='AcccountDashboard'>
            <h1>ACCOUNT DASHBOARD</h1>
            <div><h2>Hi, Bro!!!<p>This is where you can check your information.</p></h2></div>
            <br /> <br /><br /> <br /><br />
            <div classname ='RecentOders'>
                <div><h1>RECENT ORDERS(최근 주문)</h1></div>
            </div>
            
            <div className='ViewAll'>
                <button id = "DashboardBtn" type = "submit">VIEW ALL</button>
            </div>

            <div className='Oders'>
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