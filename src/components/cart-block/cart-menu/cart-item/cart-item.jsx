import React from 'react';
import styles from "./cart-item.module.css";

export const CartItem = ({
    title,
    price,
    id,
}) => {
  return (
    <div className={styles.cartItem}>
        <span>{title}</span>
        <div className={styles.price}>
            <span>{price} грн.</span>
        </div>
    </div>
  )
}
