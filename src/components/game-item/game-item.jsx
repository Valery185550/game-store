import React from 'react';
import styles from "./game-item.module.css";
import { GameCover } from './game-cover/game-cover';
import { GameBuy } from './game-buy/game-buy';
import { GameGenre } from './game-genre/game-genre';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentGame } from '../../redux/games/reducer';

export const GameItem = ({game}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = ()=>{
    dispatch(setCurrentGame(game));
    navigate(`/app/${game.title}`);
  };

  return (
    <div className={styles.gameItem} onClick={handleClick}>
        <GameCover image={game.image}/>
        <div className={styles.wrapper}>
            <span className={styles.title}>{game.title}</span>
            <div className={styles.genre}>
                {
                    game.genres.map(genre=><GameGenre genre={genre} key={genre}/>)
                }
            </div>
            <div className={styles.buy}>
              <GameBuy game={game}/>
            </div>
        </div>
    </div>
  )
}
