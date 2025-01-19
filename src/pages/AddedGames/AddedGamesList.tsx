// import { useEffect, useState } from "react";
// import styles from "./AddedGamesList.module.scss";
// import { getAddedGames } from "../../services";
// import { Game } from "../../types/game.types";

// const AddedGamesList = ({ className }: any) => {
//   const [dateList, setDateList] = useState<{ date: string; games: Game[] }[]>(
//     []
//   );

//   const getGamesList = () => {
//     const response = getAddedGames();
//     response().then((data: any) => {
//       setDateList(data);
//       console.log("GAME LIST", data);
//     });
//   };

//   useEffect(() => {
//     getGamesList();
//   }, [getAddedGames]);

//   return (
//     <div className={styles.addeGamesList + " " + className}>
//       <h2>Lista delle partite</h2>
//       <ul>
//         {dateList.map((date, index) => (
//           <li key={index}>{date?.date}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AddedGamesList;
import React, { useEffect, useState } from "react";
import { getAddedGames } from "../../services";
import styles from "./AddedGamesList.module.scss";
import { Game } from "../../types/game.types";

const AddedGamesList = ({ className }: any) => {
  const [dateList, setDateList] = useState<{ date: string; games: Game[] }[]>(
    []
  );

  const getGamesList = () => {
    const response = getAddedGames();
    response().then((data: any) => {
      setDateList(data);
      console.log("GAME LIST", data);
    });
  };

  useEffect(() => {
    getGamesList();
  }, [getAddedGames]);

  return (
    <div className={styles.bookedGamesList + " " + className}>
      <h1>Giochi Prenotati</h1>
      {dateList.length === 0 ? (
        <p className={styles.noBookings}>Non ci sono giochi prenotati.</p>
      ) : (
        <>
          {dateList.map((item, index) => {
            return item.games.length > 0 ? (
              <div key={index} className={styles.dateSection}>
                <h2 className={styles.dateHeader}>{item.date}</h2>
                <ul className={styles.gamesList}>
                  {item.games.map((game, index) => (
                    <li key={index} className={styles.gameItem}>
                      <img
                        src={game.image}
                        alt={game.name}
                        className={styles.gameImage}
                      />
                      <div className={styles.gameDetails}>
                        <h3 className={styles.gameName}>{game.name}</h3>
                        <div className={styles.detailWrapper}>
                          <p className={styles.players}>
                            Tempo: {game.playTime} minuti
                          </p>
                          <p className={styles.players}>
                            Giocatori: {game.minPlayer} - {game.maxPlayer}
                          </p>
                          <p className={styles.players}>
                            Età: {game.playerAge}+
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null;
          })}
        </>
      )}
    </div>
  );
};

export default AddedGamesList;
