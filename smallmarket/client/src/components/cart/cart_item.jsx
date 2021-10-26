import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './cart_item.module.css';

const CartItem = ({ item, quantityChangeHandler, removeHandler }) => {
  const base = '/img/items/';
  return (
    <section className={styles.item}>
      <img className={styles.image} src={base + `${item.img}`} alt="item"/>

      <Link to={`/items/${item.id}`} className={styles.content}><p>{item.name}</p></Link>
      <p className={styles.price}>${item.price}</p>

      <select 
        className={styles.select} 
        value={item.quantity}
        onChange={(e) => quantityChangeHandler(item.id, e.target.value)}
      >
        {
          [...Array(item.quantity).keys()].map(item => (
            <option>{item.quantity}</option>
          ))
        }
      </select>

      <button 
        className={styles.delete} 
        onClick={() => removeHandler(item.id)}
      ><i className="fas fa-trash"></i></button>
      {/* <i className="fa fa-shopping-bag"></i> */}
    </section>
  );
}

export default CartItem;