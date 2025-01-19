import { useEffect, useState } from "react";
import styles from "./AddedGamesList.module.scss";
import { getAddedGames } from "../../services";

const AddedGamesList = ({ className }: any) => {
  const [dateList, setDateList] = useState<string[]>([]);

  console.log("DATE LIST", dateList);

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

  return <div className={styles.addeGamesList + " " + className}></div>;
};

export default AddedGamesList;
