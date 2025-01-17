import { useEffect } from "react";
import { addGames } from "../../services";
import games from "../../utils/games_list/games_list";
import styles from "./Home.module.scss";

const Home = ({ className }: any) => {
  const filteredGames = () => {
    addGames(games)();
  };

  useEffect(() => {
    filteredGames();
  }, []);
  return <div className={styles.home + " " + className}>Home</div>;
};

export default Home;
