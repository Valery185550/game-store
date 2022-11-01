import React from 'react';
import styles from "./game-genre.module.css";

export const GameGenre = ({genre}) => {
  return (
    <span className={styles.genre}>
        {genre}
    </span>
  )
}
