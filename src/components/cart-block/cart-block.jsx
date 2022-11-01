import React, { useState } from 'react';
import styles from "./cart-block.module.css";
import {BiCart} from "react-icons/bi";
import { useSelector } from 'react-redux';
import { CartMenu } from './cart-menu/cart-menu';
import {calcTotalPrice} from "../../utils";
import { ItemsInCart } from './items-in-cart/items-in-cart';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export const CartBlock = () => {

  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector(state => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();

  const handleClick = useCallback(() =>{
    setIsCartMenuVisible(false);
    navigate("/order");
  },[navigate]);

  return (
    <div className={styles.cartBlock}>
        <ItemsInCart quantity={items.length}/>
        <BiCart size={25} className={styles.icon} onClick = {()=>setIsCartMenuVisible(!isCartMenuVisible)}/>
        { totalPrice > 0 ? <span className={styles.price}>{totalPrice}</span>:null}
        { isCartMenuVisible && <CartMenu items={items} onClick={handleClick}/>}
    </div>
  )
}
