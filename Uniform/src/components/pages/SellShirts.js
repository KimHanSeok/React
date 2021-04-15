import React from 'react';
import './SellShirts.css';

const SellShirts = () => {
    return (    
        <div className='SellShirts'>
            <div><h1>Sell Football Shirts(셔츠 판매)</h1></div>
        <h2>We don't just sell shirts we also buy them so if you want to turn your old shirts into $$$'s please e-mail us what you have for us to consider.</h2>
        <h5>(셔츠만 판매하는 것이 아니라 구입도 할 수 있으니, 오래된 셔츠를 $$$로 바꾸고 싶으시면 저희에게 고려해야 할 사항을 이메일로 보내 주십시오.)   :)</h5>
        <h3>SEND MESSAGE(SELL SHIRTS)</h3>

        <p>Name</p>   
        <div className='Name'>
            <input type='text'></input>
        </div>

        <p>Phone Number</p> 
        <div className='Phone Number'>
            <input type='text'></input>
        </div>

        <p>E-mail Address</p> 
        <div className='E-mail Address'>
            <input type='text'></input>
        </div>

        <p>Brief description of items.</p> 
        <div className='E-mail Address'>
            <input type='text'></input>
        </div>

        <button className='SENDMESSAGE'>
            <button id = "submitBtn" type = "submit">SEND YOUR MESSAGE</button>
        </button>

        <button className='CANCEL'>
            <button id = "cancelBtn" type = "reset">CANCEL</button>
        </button>
        
        </div>
    );
}

export default SellShirts;