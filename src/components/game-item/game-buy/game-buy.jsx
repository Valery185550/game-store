import React from 'react';
import { Button } from '../../button/button';
import styles from "./game-buy.module.css";
import { useDispatch, useSelector } from 'react-redux';
import {deleteItemFromCart, setItemInCart} from "../../../../src/redux/cart/reducer";

export const GameBuy = ({game}) => {

  const dispatch = useDispatch();
  const items = useSelector(state=>state.cart.itemsInCart);
  const isItemInCart = items.some(item=>item.id===game.id)

  const handleClick = (e)=>{
    e.stopPropagation();
    if( isItemInCart)
    {
      dispatch(deleteItemFromCart(game.id));
    }

    else{
      dispatch(setItemInCart(game));
    }
    
  }

  return (
    <div className={styles.gameBuy}>
        <span className={styles.price}>{game.price} грн. </span>
        <Button
            type={isItemInCart ? "secondary" : "primary"}
            onClick={handleClick}
        >
            {isItemInCart? "Прибрати" : "В кошик"}
        </Button>
    </div>
  )
}
