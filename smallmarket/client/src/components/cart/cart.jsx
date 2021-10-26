import React from 'react';
import styles from './cart.module.css';
import CartItem from './cart_item';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, removeCart } from '../../redux/action/cartAction';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const quantityChangeHandler = (itemId, quantity) => {
    dispatch(addCart(itemId, quantity));
  }

  const removeHandler = (id) => {
    dispatch(removeCart(id));
  }

  const getTotalItemCount = () => {
    return cartItems.reduce((quantity, item) => Number(item.quantity) + quantity, 0);
  }

  const getTotalItemPrice = () => {
    return cartItems.reduce((price, item) => (item.price * item.quantity) + price, 0);
  }

  return (
    <section className={styles.cart}>
      <div className={styles.item}>
        <h1 className={styles.title}>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <div className={styles.empty}>
            <i className="fas fa-shopping-bag"></i> Cart is empty !<Link to='/shop'>Go Home</Link>
          </div>
        ) : cartItems.map(item => 
          (<CartItem 
            item={item} 
            quantityChangeHandler={quantityChangeHandler} 
            removeHandler={removeHandler} 
          />)
        )
      }
        {/* cart item ... */}
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>Information</h1>
        <div className={styles.detail}>
          <p className={styles.content}>Count : {getTotalItemCount()}</p>
          <p className={styles.content}>Dollar : {getTotalItemPrice()}</p>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Checkout</button>
        </div>
      </div>
    </section>
  );
}

export default Cart;