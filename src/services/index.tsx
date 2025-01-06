import { Game } from "../types/game.types";
import { db } from "../utils/firebase-config";
import { setDoc, doc, addDoc, collection, getDocs } from "firebase/firestore";
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

export const getFilteredGames = () => async () => {
  try {
    const prod = getDocs(collection(db, `/games`)).then((data) => {
      let products = data.docs.map((i) => i.data());
      return products;
    });
    return prod;
  } catch (err) {
    console.log(err);
  }
};

export const getGames = () => async () => {
  try {
    const prod = getDocs(collection(db, `/games`)).then((data) => {
      let products = data.docs.map((i) => i.data());
      return products;
    });
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
