import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./header.module.css";
import { CartBlock } from '../cart-block/cart-block';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.title} >Game Store</Link>
      </div>
      <div className={styles.cartBtn}>
        <CartBlock/>
      </div>
    </div>
  )
}
