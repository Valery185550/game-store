import React from 'react';
import styles from "./order-page.module.css";
import { useSelector } from 'react-redux';
import { calcTotalPrice } from '../../utils';
import {OrderItem} from "../../components/order-item/order-item";

export const OrderPage = () => {

  const items = useSelector(state => state.cart.itemsInCart);

  return (
    <div className={styles.orderPage}>
        <div className={styles.left}>
            {items.map(game => <OrderItem game={game}/>)}
        </div>
        <div className={styles.right}>
            <div className={styles.totalPrice}>
                <span>
                    {items.length} товарів на суму {calcTotalPrice(items)} грн.
                </span>
            </div>
        </div>
    </div>
  )
}
