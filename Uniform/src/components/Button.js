import React, { useState } from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {

  return (
    <>
    <Link to="/Sign_up">
      <button className='btn'>Sign Up</button>
    </Link>
    </>
  );
}
