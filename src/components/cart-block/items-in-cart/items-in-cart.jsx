import React from 'react';
import styles from "./items-in-cart.module.css";

export const ItemsInCart = ({quantity=0}) => {
  return quantity > 0 ? (
    <div className={styles.itemsInCart}>
        {quantity}
    </div>
  ) : null
}
