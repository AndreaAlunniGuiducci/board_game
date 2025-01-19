import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { GameFilter } from "../pages/GamesList/GamesList";
import { Game } from "../types/game.types";
import { db } from "../utils/firebase-config";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";

export const addGames = (games: Game[]) => async () => {
  try {
    games.map(async (game) => {
      await setDoc(doc(db, `/games/${game.id}`), { ...game });
    });
  } catch (err) {
    console.log(err);
  }
};

export const addGamesToTheEvening =
  (games: Game[], date: string) => async () => {
    try {
      await setDoc(doc(db, `booked/${date}`), { date, games });
      // games.map(async (game) => {
      //   await setDoc(doc(db, `/booked/${date}`), {
      //     ...game,
      //   });
      // });
    } catch (err) {
      console.log(err);
    }
  };

export const getFilteredGames = (filter: GameFilter) => async () => {
  try {
    const q = query(
      collection(db, "games"),
      where("playerAge", "<=", parseInt(filter.age ?? "100")),
      where("playTime", "<=", parseInt(filter.gameTime ?? "100")),
      // where("maxPlayer", "<=", parseInt(filter.numberPlayer ?? "100"))
      where("minPlayer", "<=", parseInt(filter.numberPlayer ?? "100"))
    );

    // Esegui la query e ottieni i documenti
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      console.log("GAME Nessun documento trovato con questo filtro.");
    }
    const items = querySnapshot.docs.map((doc) => doc.data());
    const filteredItems = items.filter((game) => {
      return (
        game.name.toLowerCase().includes(filter.name?.toLowerCase() ?? "") &&
        game.maxPlayer >= parseInt(filter.numberPlayer ?? "0")
      );
    });
    return filteredItems;
    // const prod = getDocs(collection(db, `/games`)).then((data) => {
    //   let products = data.docs.map((i) => i.data());
    //   return products;
    // });
  } catch (err) {
    console.log("GAME ERR", err);
  }
};

export const getGames = () => async () => {
  try {
    const prod = getDocs(collection(db, `games`)).then((data) => {
      let games = data.docs.map((i) => i.data());
      return games;
    });
    return await prod;
  } catch (err) {
    console.log(err);
  }
};

export const getAddedGames = () => async () => {
  try {
    const prod = getDocs(collection(db, `booked`)).then((data) => {
      let addedGames = data.docs.map((i) => i.data());
      return addedGames;
    });
    prod.then((data) => console.log(data));
    return await prod;
  } catch (err) {
    console.log(err);
  }
};

//---------------------------------------- USER LOG ------------------------------------------------------
// export const USER_SIGNUP =
//   (auth, registerEmail, registerPassword) => async (dispatch) => {
//     try {
//       const user = await createUserWithEmailAndPassword(
//         auth,
//         registerEmail,
//         registerPassword
//       );
//       localStorage.setItem("user", JSON.stringify(user));
//       // const currentUser = JSON.parse(localStorage.getItem ('user'))
//       dispatch({
//         type: USER_LOGGED_SUCCESS,
//         payload: user,
//       });
//       // window.location.assign("/book");
//       console.log(user);
//     } catch (err) {
//       console.log(err);
//       console.log("Email o password non valide");
//     }
//   };

// export const USER_LOGIN =
//   (auth, loginEmail, loginPassword) => async (dispatch) => {
//     try {
//       const user = await signInWithEmailAndPassword(
//         auth,
//         loginEmail,
//         loginPassword
//       );
//       localStorage.setItem("user", JSON.stringify(user));
//       console.log(user);
//       dispatch({
//         type: USER_LOGGED_SUCCESS,
//         payload: user,
//       });
//     } catch (err) {
//       // console.log(err);
//       console.log("Email o password non valide");
//     }
//   };
// export const LOG_OUT = () => async (dispatch) => {
//   try {
//     const user = {};

//     dispatch({
//       type: USER_LOGGED_SUCCESS,
//       payload: user,
//     });
//   } catch (err) {
//     console.log(err);
//     console.log("Email o password non valide");
//   }
// };
