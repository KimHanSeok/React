import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            REP1ER
          <i class='fab fa-firstdraft' />
            </Link>
        <div className='menu-icons' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li
            className='nav-item'>
            <Link
              to='/SellShirts'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              SELL SHIRTS <i className='fas fa-caret-down' />
            </Link>
          
          </li>
          <li className='nav-item'>
            <Link
              to='/ContactUs'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              CONTACT US
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/MyAccount'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              MY ACCOUNT
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
