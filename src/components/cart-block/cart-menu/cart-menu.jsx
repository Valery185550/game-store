import React from 'react';
import styles from "./cart-menu.module.css";
import { calcTotalPrice } from '../../../utils';
import { Button } from '../../button/button';
import { CartItem } from './cart-item/cart-item';

export const CartMenu = ({items, onClick}) => {
  return (
    <div className={styles.cartMenu}>
        <div className="gamesList">
            {
                items.length > 0 ? items.map(game => <CartItem key={game.title} price={game.price} title={game.title} id={game.id}/>) : "Кошик порожній"
            }
        </div>
        {
            items.length > 0 ?
            <div className={styles.arrange}>
                <div className={styles.totalPrice}>
                    <span>Всього:</span>
                    <span>{calcTotalPrice(items)} грн.</span>
                </div>
                <Button type="primary" size="m" onClick={onClick}>Оформити замовлення</Button>
            </div>
            :null
        }
    </div>
  )
}
