import React, { useEffect, useState } from "react";
import styles from "./GameDetailPage.module.scss";
import { useParams } from "react-router-dom";
import { Game } from "../../types/game.types";
import games from "../../utils/games_list/games_list";

const GameDetailPage = ({ className }: any) => {
  const params = useParams();
  const { gameId } = params;
  const [game, setGame] = useState<Game | undefined>(undefined);

  useEffect(() => {
    const selectedGame = games.find((g) => g.id === gameId);
    setGame(selectedGame);
  }, [gameId]);

  const {
    categories,
    description,
    image,
    maxPlayer,
    minPlayer,
    name,
    playTime,
    playerAge,
  } = game || {};

  return (
    <div className={styles.container + " " + className}>
      <div className={styles.header}>
        <img src={image} alt={name} className={styles.image} />
        <div className={styles.info}>
          <h1 className={styles.title}>{name}</h1>
          <p className={styles.description}>{description}</p>
          <div className={styles.details}>
            <p>⏱️ Tempo di gioco: {playTime} min</p>
            <p>
              👥 Giocatori: {minPlayer}-{maxPlayer}
            </p>
            <p>👶 Età consigliata: {playerAge}+</p>
          </div>
          <div className={styles.categories}>
            {categories?.map((category, index) => (
              <span key={index} className={styles.category}>
                {category}
              </span>
            ))}
          </div>
          <div className={styles.actions}>
            <button className={styles.buyButton}>Aggiungi alla serata</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetailPage;
