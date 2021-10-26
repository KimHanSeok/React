import styles from './navbar.module.css';
import { Link, useHistory } from 'react-router-dom';
import React from 'react';

const Navbar = ({ click }) => {
  const history = useHistory();
  const TOKEN = 'token';
  const logoutHandler = () => {
    localStorage.clear();
    window.location.replace('/');
  }
  const cartClickHandler = () => {
    if(!localStorage.getItem(TOKEN)) {
      alert('You need to Login or Register!!');
    } else {
      history.push('/cart');
    }
  }

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li>
          <Link to="/items">
            <span className={styles.title}><i className="fas fa-shopping-bag"></i> SHOP</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <span className={styles.title}>CONTACT</span>
          </Link>
        </li>
        <li>
          <span 
            className={styles.titleCart}
            onClick={cartClickHandler}
          >
            <i className="fas fa-shopping-cart"></i> CART
          </span>
        </li>
        <li className={styles.imgContainer}>
          <Link to='/main'>
            <img className={styles.logo} src='/img/logo.png' alt="logo" />
          </Link>
        </li>
        {!localStorage.getItem(TOKEN) && 
          <li>
            <Link to="/login">
              <span className={styles.title}>LOGIN</span>
            </Link>
          </li>
        }
        {!localStorage.getItem(TOKEN) &&
          <li>
            <Link to="/register">
              <span className={styles.title}>REGISTER</span>
            </Link>
          </li>
        }
        {localStorage.getItem(TOKEN) && 
          <li>
            <span 
              className={styles.titleLogout}
              onClick={logoutHandler}
            >LOGOUT</span>
          </li>
        }
        {localStorage.getItem(TOKEN) &&
          <li>
            <Link to="/board">
              <span className={styles.title}>Q & A</span>
            </Link>
          </li>
        }
        <li>
          <Link to="/about">
            <span className={styles.title}>ABOUT</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default React.memo(Navbar);