import React from 'react';
import styles from "./home-page.module.css";
import {GAMES} from "../../data.js";
import { GameItem } from '../../components/game-item/game-item';

export const HomePage=()=>{
  return (
    <div className={styles.homePage}>
        {GAMES.map(game=><GameItem game={game} key={game.id}/>)}
    </div>
  )
}

