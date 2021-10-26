
import React, { useState, useEffect } from 'react'
import styles from './item_list.module.css';
import './paging.css';
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from 'react-redux';
import { getItems as itemList } from '../../redux/action/itemAction';
import Item from '../item/item';

const ItemList = () => {
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };
  const dispatch = useDispatch();
  const getItems = useSelector(state => state.getItems);
  const { items, error } = getItems;

  useEffect(() => {
    dispatch(itemList());
  }, [dispatch]);

  return (
    <section className={styles.container}>
      <div className={styles.shopTop}>
        <div className={styles.shopBox}>
          <h1>ITEMS</h1>
          <div className={styles.search}>
            <input
              className={styles.shopSearchBox}
              placeholder="검색어를 입력해주세요."
            />
          </div>
        </div>
      </div>

      <div className={styles.moveTop}>
        <img src="/img/goTop.jpg" alt="sample01" />
      </div>

      <div className={styles.item}>
        {error ? (
          <h1>{error}</h1>
        ) : (
          items.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              id={item.id}
              img={item.img}
            />
          ))
        )}
      </div>

      <ul className={styles.Pagination}>
        <Pagination
          activePage={page}
          itemsCountPerPage={6}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          prevPageText={'‹'}
          nextPageText={'›'}
          onChange={handlePageChange}
        />
      </ul>
    </section>
  );
};
export default ItemList;
