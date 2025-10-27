import React from "react";
import styles from "./GameCard.module.scss";
import Button from "../../atoms/Button/Button";
import { Heart, HeartFill } from "react-bootstrap-icons";
import getCategory from "../../../utils/getCategory";
import { Category } from "../../../types/game.types";

interface GameCardProps {
  is_favorite?: boolean;
  imageUrl?: string;
  title?: string;
  playTime?: string;
  minPlayers?: string;
  maxPlayers?: string;
  recommendedAge?: string;
  onDetailClick?: () => void;
  onAddGame?: () => void;
  onRemoveGame?: () => void;
  categories?: string[];
  selected?: boolean;
  handleFavorite?: () => void;
}

const GameCard = ({
  imageUrl,
  is_favorite,
  title,
  playTime,
  minPlayers,
  maxPlayers,
  recommendedAge,
  categories,
  onDetailClick,
  onAddGame,
  onRemoveGame,
  handleFavorite,
  selected,
}: GameCardProps) => {
  return (
    <div className={`${styles.card} ${selected ? styles.selected : ""}`}>
      <div className={styles.imageWrapper}>
        <div className={styles.favoriteIcon} onClick={handleFavorite}>
          {is_favorite ? <HeartFill size={20} /> : <Heart size={20} />}
        </div>
        <img className={styles.image} src={imageUrl} alt={title} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.details}>
          <span>
            ⏱ <br />
            {playTime} min
          </span>
          <span>
            👥 <br />
            {minPlayers}-{maxPlayers} giocatori
          </span>
          <span>
            👶 <br />
            {recommendedAge} anni+
          </span>
        </div>
        <div className={styles.categories}>
          {categories?.map((category, index) => (
            <span key={index} className={styles.category}>
              {getCategory(category as Category)}
            </span>
          ))}
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
            theme={selected ? "red" : "green"}
            className={styles.buyButton}
            onClick={selected ? onRemoveGame : onAddGame}
          >
            {selected ? "Togli dalla serata" : "Aggiungi alla serata"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
