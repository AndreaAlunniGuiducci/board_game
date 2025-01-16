import React from "react";
import styles from "./GameCard.module.scss";

interface GameCardProps {
  imageUrl?: string;
  title?: string;
  playTime?: string;
  minPlayers?: string;
  maxPlayers?: string;
  recommendedAge?: string;
  onDetailClick?: () => void;
  onBuyClick?: () => void;
}
const GameCard = ({
  imageUrl,
  title,
  playTime,
  minPlayers,
  maxPlayers,
  recommendedAge,
  onDetailClick,
  onBuyClick,
}: GameCardProps) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={imageUrl} alt={title} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <ul className={styles.details}>
          <li>⏱ Tempo di gioco: {playTime} min</li>
          <li>
            👥 Giocatori: {minPlayers} - {maxPlayers}
          </li>
          <li>👶 Età consigliata: {recommendedAge}+</li>
        </ul>
        <div className={styles.actions}>
          <button className={styles.button} onClick={onDetailClick}>
            Vai al Dettaglio
          </button>
          <button
            className={`${styles.button} ${styles.buyButton}`}
            onClick={onBuyClick}
          >
            Acquista
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
