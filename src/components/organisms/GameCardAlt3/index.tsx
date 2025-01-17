import React from "react";
import styles from "./GameCard.module.scss";
import Button from "../../atoms/Button/Button";

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
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={imageUrl} alt={title} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.details}>
          <span>⏱ {playTime} min</span>
          <span>
            👥 {minPlayers}-{maxPlayers} giocatori
          </span>
          <span>👶 {recommendedAge} anni+</span>
        </div>
        <div className={styles.actions}>
          {/* <button className={styles.detailButton} onClick={onDetailClick}>
            Vai al Dettaglio
          </button> */}
          <Button onClick={onDetailClick}>Vai al Dettaglio</Button>
          {/* <button className={styles.buyButton} onClick={onBuyClick}>
            Acquista
          </button> */}
          <Button
            theme="green"
            className={styles.buyButton}
            onClick={onBuyClick}
          >
            Aggiungi alla serata
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
