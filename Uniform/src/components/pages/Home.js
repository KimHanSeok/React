import React from 'react';
import '../../App.css';

export default function Home() {
  return (
    <>
    <div>
      <h1 className='home'>Welcome</h1>
      <img src={process.env.PUBLIC_URL +'/images/Reflica.jpg'} />
      </div>
    </>
  ); 
}
