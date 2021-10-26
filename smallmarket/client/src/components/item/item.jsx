import React from "react";
import { Link } from 'react-router-dom';
import styles from './item.module.css';

const Item = ({ id, name, price, quantity, img }) => {
  const base = '/img/items/';
  const imgRoute = base + `${img}`;

  return (
      <section className={styles.itemBox}>
        <img className={styles.imgSet} src={imgRoute} alt={name} />
        <div className={styles.itemInfo}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.itemPrice}>Price : {price}</p>
          <p className={styles.itemQuantity}>Quantity : {quantity}</p>
          <p className={styles.description}>Description : {name}</p>
          <button className={styles.button}><Link to={`/items/detail/${id}`}>Detail</Link></button>
        </div>
      </section>    
  );
}
export default Item;