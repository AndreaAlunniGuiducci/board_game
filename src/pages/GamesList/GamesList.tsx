import { Link, useLocation, useNavigate } from "react-router-dom";
// import GameCard from "../../components/organisms/GameCard/GameCard";
import styles from "./GamesList.module.scss";
import Accordion from "../../components/organisms/Accordion/Accordion";
import { Filter } from "react-bootstrap-icons";
import Input from "../../components/atoms/Input/Input";
import { useEffect, useState } from "react";
import {
  addGamesToTheEvening,
  getFilteredGames,
  getGames,
} from "../../services";
import { Spinner } from "react-bootstrap";
import GameCard from "../../components/organisms/GameCardAlt3";
import games from "../../utils/games_list/games_list";
import { Game } from "../../types/game.types";
import Modal from "../../components/atoms/Modal/Modal";
import ModalDate from "../../components/organisms/Modal/ModalDate";
import Button from "../../components/atoms/Button/Button";
import { useSelector } from "react-redux";
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
  const location = useLocation();
  const userUid = useSelector((state: any) => state.user.uid);
  console.log("🚀 ~ GamesList ~ userUid:", userUid)
  const { state } = location;

  const [userIsLogged, setUserIsLogged] = useState<boolean>(false);
  const [gameFilter, setGameFilter] = useState<GameFilter>({
    name: undefined,
    age: undefined,
    gameTime: undefined,
    numberPlayer: undefined,
  });
  const [gamesList, setGamesList] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [addedGames, setAddedGames] = useState<Game[]>([]);
  const [date, setDate] = useState<string | undefined>();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handlePurchase = (date: string) => {
    const dateString = new Date(date.replaceAll("/", "-")).toLocaleDateString(
      "it"
    );
    setDate(dateString);
    localStorage.setItem("gameDate", dateString);
  };

  const getGamesList = () => {
    setLoading(true);
    const response = getGames();
    response().then((data: any) => {
      setGamesList(data);
      setLoading(false);
    });
  };

  const addGameInList = (game: Game) => {
    //TODO: migliorare logica aggiunta giochi con data
    const localDate = localStorage.getItem("gameDate");
    if (userIsLogged && localDate) {
      setDate(localDate);
      setAddedGames([...addedGames, game]);
      setModalOpen(false);
    } else {
      setAddedGames([...addedGames, game]);
      setModalOpen(true);
    }
  };

  const removeGameInList = (game: Game) => {
    setAddedGames(addedGames.filter((g) => g.id !== game.id));
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
      setGamesList(filteredGames as Game[]);
    };
    filterTheGame();
  }, [gameFilter]);

  // useEffect(() => {
  //   if (addedGames.length >= 0 && date) {
  //     addGamesToTheEvening(addedGames, date)();
  //   }
  // }, [addedGames]);

  useEffect(() => {
    if (state && state.game) {
      addGameInList(state.game);
    }
  }, [state]);

  useEffect(() => {
    const userToken = localStorage.getItem("user");
    if (userToken) {
      setUserIsLogged(true);
    } else {
      setUserIsLogged(false);
    }
  }, [localStorage]);

  return (
    <>
      {/* <ModalDate
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handlePurchase}
      /> */}
      <div className={styles.gamesList + " " + className}>
        {/* {date && (
          <div className={styles.dateInfo}>
            <span>Stai scegliendo i giochi per il {date}</span>
            <Link to="/riepilogo" state={{ games: addedGames }}>
              <Button>Vai al riepilogo</Button>
            </Link>
          </div>
        )} */}
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
              ? gamesList.map((g) => (
                  <GameCard
                    categories={g.categories}
                    imageUrl={g.image}
                    title={g.name}
                    playTime={g.playTime.toString()}
                    minPlayers={g.minPlayer.toString()}
                    maxPlayers={g.maxPlayer.toString()}
                    recommendedAge={g.playerAge.toString()}
                    onDetailClick={() => navigate("/gioco/" + g.id)}
                    onAddGame={() => addGameInList(g)}
                    onRemoveGame={() => removeGameInList(g)}
                    selected={addedGames.some((game) => game.id === g.id)}
                  />
                ))
              : "Empty STATE"}
          </div>
        )}
      </div>
    </>
  );
};

export default GamesList;
