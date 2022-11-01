import React from 'react';
import styles from "./game-cover.module.css";

export const GameCover = ({image=""}) => {
  return (
    <div className={styles.gameCover} style={{backgroundImage:`url(${image})`}}>
        
    </div>
  )
}
