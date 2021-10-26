import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiPlus, HiMinus } from 'react-icons/hi';
import styles from './product_detail.module.css';
import { getItemDetails } from '../../redux/action/itemAction';
import { addCart } from '../../redux/action/cartAction';

function ProductDetail({ match, history }) {
  const [quantity, setQuantitiy] = useState(1);
  const dispatch = useDispatch();
  const itemDetails = useSelector(state => state.getItemDetails);
  const { item, loading, error } = itemDetails;
  const base = "/img/items/";

  useEffect(() => {
    if(item  && (match.params.id !== item.id)) {
      dispatch(getItemDetails(match.params.id));
    }
  }, []);

  const onIncrease = () => {
    setQuantitiy((preQuantity) => preQuantity + 1);
  };

  const onDecrease = () => {
    setQuantitiy((preQuantity) => preQuantity - 1);
  };

  const cartHandler = () => {
    dispatch(addCart(item.id, quantity));
    history.push('/cart');
  }

  return (
    <div className={styles.productWrap}>
      {loading ? ( 
        <h2>Loading</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
      <>
        <div className={styles.productContainer}>
          <div className={styles.productImg}>
            <img src={base + `${item.img}`} alt={item.name} />
          </div> 
          <div className={styles.productInfo}>
            <span className={styles.titleMain}>{item.name}</span>
            <span className={styles.titleSub}>{item.name}</span>
            <span className={styles.priceSub}>Price : {item.price}</span>
          </div>
        </div>
        <div className={(styles.productQuantity)}>
          <div className={styles.quantityInfo}>
            <btuton className={styles.btQuantity} onClick={onDecrease}>
              <HiMinus />
            </btuton>
            <input
              type="number"
              readOnly={true}
              className={styles.inputQuantity}
              value={quantity < 0 ? 0 : quantity}
            />
            <button className={styles.btQuantity} onClick={onIncrease}><HiPlus/></button>
            <span className={styles.totalMain}>Total Price  ${quantity * item.price}</span>
            <button 
              className={styles.info_basket} 
              onClick={cartHandler}
            >Add to cart
            </button>
          </div>
        </div>
      </>
      )}
    </div>
  );
}

export default ProductDetail;
