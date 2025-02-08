import { useEffect } from "react";
import { addGames } from "../../services";
import games from "../../utils/games_list/games_list";
import styles from "./Home.module.scss";
import Button from "../../components/atoms/Button/Button";

const Home = ({ className }: any) => {
  const filteredGames = () => {
    // addGames(games)();
  };

  useEffect(() => {
    filteredGames();
  }, []);
  return (
    <div className={styles.home + " " + className}>
      <Button
        // onClick={async () => {
        //   await addGames(games)();
        //   alert("Games added");
        // }}
      >
        ADD GAMES
      </Button>
      Home
    </div>
  );
};

export default Home;
