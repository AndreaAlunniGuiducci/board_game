import { useNavigate } from "react-router-dom";
// import GameCard from "../../components/organisms/GameCard/GameCard";
import styles from "./GamesList.module.scss";
import Accordion from "../../components/organisms/Accordion/Accordion";
import { Filter } from "react-bootstrap-icons";
import Input from "../../components/atoms/Input/Input";
import { useEffect, useState } from "react";
import { getFilteredGames, getGames } from "../../services";
import Modal from "../../components/atoms/Modal/Modal";
import { Spinner } from "react-bootstrap";
import GameCard from "../../components/organisms/GameCardAlt3";
import games from "../../utils/games_list/games_list";
// import GameCard from "../../components/organisms/GameCardAlt2";
// import GameCard from "../../components/organisms/GameCardAlt";

export interface GameFilter {
  name: string | undefined;
  age: string | undefined;
  numberPlayer: string | undefined;
  gameTime: string | undefined;
}

const GamesList = ({ className }: any) => {
  const navigate = useNavigate();

  const [gameFilter, setGameFilter] = useState<GameFilter>({
    name: undefined,
    age: undefined,
    gameTime: undefined,
    numberPlayer: undefined,
  });
  const [gamesList, setGamesList] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  console.log("GAMES LIST GAMELIT STATE", gamesList);

  const getGamesList = () => {
    setLoading(true);
    const response = getGames();
    response().then((data: any) => {
      setGamesList(data);
      console.log("GAME LIST", data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getGamesList();
  }, [getGames]);

  useEffect(() => {
    setGamesList([]);
    const filterTheGame = async () => {
      setLoading(true);
      const filteredGames = await getFilteredGames(gameFilter)();

      setLoading(false);
      setGamesList(filteredGames);
      console.log("GAME LIST WITH FILTER", filteredGames);
    };
    filterTheGame();
  }, [gameFilter]);

  return (
    <div className={styles.gamesList + " " + className}>
      <div className={styles.searchBar}>
        <Accordion
          items={[
            {
              body: (
                <div className={styles.inputWrapper}>
                  <Input
                    label="Nome"
                    placeholder="Nome gioco"
                    value={gameFilter.name}
                    onChange={(e: any) =>
                      setGameFilter({
                        ...gameFilter,
                        name: e.currentTarget.value,
                      })
                    }
                  />
                  <Input
                    label="Età"
                    placeholder="Età giocatore"
                    value={gameFilter.age}
                    onChange={(e: any) =>
                      setGameFilter({
                        ...gameFilter,
                        age: e.currentTarget.value,
                      })
                    }
                  />
                  <Input
                    label="Numero giocatori"
                    placeholder="Numero giocatori"
                    value={gameFilter.numberPlayer}
                    onChange={(e: any) =>
                      setGameFilter({
                        ...gameFilter,
                        numberPlayer: e.currentTarget.value,
                      })
                    }
                  />
                  <Input
                    label="Minuti di gioco"
                    placeholder="Minuti di gioco"
                    value={gameFilter.gameTime}
                    onChange={(e: any) =>
                      setGameFilter({
                        ...gameFilter,
                        gameTime: e.currentTarget.value,
                      })
                    }
                  />
                </div>
              ),
              eventKey: "0",
              header: (
                <div>
                  Filtri <Filter />
                </div>
              ),
            },
          ]}
        />
      </div>
      {loading ? (
        <Modal className={styles.loadingModal}>
          <Spinner />
        </Modal>
      ) : (
        <div className={styles.cardsWrapper}>
          {gamesList.length > 0
            ? games.map((g: any) => (
                // <GameCard
                //   key={g.id}
                //   onClick={() => navigate("/gioco/" + g.id)}
                //   categories={g.categories}
                //   description={g.description}
                //   image={g.image}
                //   maxPlayer={g.maxPlayer}
                //   minPlayer={g.minPlayer}
                //   name={g.name}
                //   playTime={g.playTime}
                //   playerAge={g.playerAge}
                // />
                <GameCard
                  imageUrl={g.image}
                  title={g.name}
                  playTime={g.playTime}
                  minPlayers={g.minPlayer}
                  maxPlayers={g.maxPlayer}
                  recommendedAge={g.playerAge}
                  onDetailClick={() => navigate("/gioco/" + g.id)}
                  onBuyClick={() => navigate("/gioco/" + g.id)}
                />
              ))
            : "Empty STATE"}
        </div>
      )}
    </div>
  );
};

export default GamesList;
