import React from 'react';
import { useSelector } from 'react-redux';
import styles from "./game-page.module.css";
import {GameCover} from "../../components/game-item/game-cover/game-cover";
import { GameGenre } from '../../components/game-item/game-genre/game-genre';
import { GameBuy } from '../../components/game-item/game-buy/game-buy';

export const GamePage = () => {

  const game = useSelector(state=>state.game.currentGame);

  //if(!game) return null;

  return (
    <div className={styles.gamePage}>
        <h1 className={styles.title}>{game.title}</h1>
        <div className={styles.content}>
          <div className={styles.left}>
            <iframe
              width="90%"
              height="400px"
              src={game.video}
              title="Youtube Video Player"
              frameBorder="0"
            ></iframe>
          </div>
          <div className={styles.right}>
            <GameCover image={game.image}/>
            <p>{game.description}</p>
            <p className="secondaryText">Популярні позначення цього продукту: </p>
            {game.genres.map(genre=> <GameGenre genre={genre} key ={genre}/>)}
            <div className={styles.buyGame}>
              <GameBuy game={game}/>
            </div>
          </div>
        </div>
    </div>
  )
}
