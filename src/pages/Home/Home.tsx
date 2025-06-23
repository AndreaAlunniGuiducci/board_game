import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import heroImage from "../../assets/hero_image.png";
import GameCard from "../../components/organisms/GameCardAlt3";
import { addGames, getHighlightGames } from "../../services";
import { Game } from "../../types/game.types";
import styles from "./Home.module.scss";
// import Button from "../../components/atoms/Button/Button";
// import games from "../../utils/games_list/games_list";

const Home = ({ className }: any) => {
  const navigate = useNavigate();
  const [featuredGames, setFeaturedGames] = useState<Game[]>([]);

  useEffect(() => {
    const response = getHighlightGames();
    response().then((data: any) => {
      setFeaturedGames(data);
    });
  }, []);

  return (
    <div className={styles.home + " " + className}>
      {/* Hero Section */}
      {/* <Button
        onClick={async () => {
          await addGames(games)();
          alert("Games added");
        }}
      >
        ADD GAMES
      </Button> */}
      <section className={styles.hero}>
        <img src={heroImage} alt="Azul" className={styles.heroImg} />
        <div className={styles.heroContent}>
          <h1>Scopri e Prenota i Migliori Giochi da Tavolo!</h1>
          <p>
            Esplora un vasto catalogo di giochi, scegli i tuoi preferiti e
            prenotali per una serata divertente.
          </p>
          <Link to="/lista_giochi" className={styles.ctaButton}>
            Esplora i Giochi
          </Link>
        </div>
      </section>

      {/* Giochi in Evidenza */}
      <section className={styles.featured}>
        <h2>Giochi in Evidenza</h2>
        <div className={styles.gameList}>
          {featuredGames.map((g) => (
            <GameCard
              categories={g.categories}
              imageUrl={g.image}
              title={g.name}
              playTime={g.playTime.toString()}
              minPlayers={g.minPlayer.toString()}
              maxPlayers={g.maxPlayer.toString()}
              recommendedAge={g.playerAge.toString()}
              onDetailClick={() => navigate("/gioco/" + g.id)}
              // onAddGame={() => addGameInList(g)}
              // onRemoveGame={() => removeGameInList(g)}
              // selected={addedGames.some((game) => game.id === g.id)}
            />
          ))}
        </div>
      </section>

      {/* Categorie Popolari */}
      {/* <section className={styles.categories}>
        <h2>Esplora per Categoria</h2>
        <div className={styles.tags}>
          <Tag label="Strategia" />
          <Tag label="Party" />
          <Tag label="Famiglia" />
          <Tag label="Cooperativi" />
        </div>
      </section> */}

      {/* Come Funziona */}
      <section className={styles.howItWorks}>
        <h2>🎲 Come Funziona? 🎲</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <span className={styles.icon}>📅</span>
            <span className={styles.text}>Prenota una data</span>
          </div>
          <div className={styles.step}>
            <span className={styles.icon}>📖</span>
            <span className={styles.text}>Scegli i giochi</span>
          </div>
          <div className={styles.step}>
            <span className={styles.icon}>🎉</span>
            <span className={styles.text}>Gioca e divertiti!</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.finalCTA}>
        <h2>Pronto a Giocare?</h2>
        <Link to="/lista_giochi" className={styles.ctaButton}>
          Prenota Ora
        </Link>
      </section>
    </div>
  );
};

export default Home;
