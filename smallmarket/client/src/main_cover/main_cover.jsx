import React from 'react';
import { Link } from 'react-router-dom';
import styles from './main_cover.module.css';

const MainCover = () => {
  return (
    <section className={styles.container}>
      <nav> 
        {/* add logo */}
        <h1 className={styles.logoTitle}>Small Market</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link className={styles.shop} to="/items"><i className="fas fa-shopping-bag"></i> Shop</Link></li>
        </ul>
      </nav>
      <div className={styles.textBox}>
        <p>We are</p>
        <h1>SMALL<br/>MARKET</h1>
        <h3>We are make Small Market Websites</h3>
        <div className={styles.row}>
          <Link to ="/main">Explore Our Market</Link>
          <Link to ="/contact">Connect With Our Team<span>→</span></Link>
          <span>You Can Explore More About Our Shop And<br/> Enjoy Our Products</span>
        </div>
      </div>
    </section>
  );
}

export default MainCover;