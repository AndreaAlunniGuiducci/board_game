import {
  Auth,
  createUserWithEmailAndPassword,
  reload,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase-config";

export const isUserLoggedIn = (): boolean => {
  const user = localStorage.getItem("user");
  if (user) {
    return true;
  } else {
    return false;
  }
};

export const getUserId = (): string => {
  const user = window.localStorage.getItem("user");
  const userId = user ? JSON.parse(user).uid : "";
  return userId;
};

export const registerUser = async (
  user_email: string,
  user_password: string
) => {
  const register = await createUserWithEmailAndPassword(
    auth,
    user_email,
    user_password
  )
    .then(async (userCredential) => {
      // Signed up
      const user = userCredential.user;
      const currentUser = auth.currentUser;
      let displayName = user_email.split("@")[0];
      displayName = displayName.charAt(0).toUpperCase() + displayName.slice(1);
      if (currentUser) {
        await updateProfile(auth.currentUser!, {
          displayName,
        }).then(() => {});
      }
      window.localStorage.setItem("user", JSON.stringify(user));
      return true;
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode.includes("auth/email-already-in-use")) {
        window.alert("Email già in uso");
      }
      console.error("Error creating user", errorCode);
      return false;
    });
  return register;
};

export const loginUser = async (user_email: string, user_password: string) => {
  const login = await signInWithEmailAndPassword(
    auth,
    user_email,
    user_password
  )
    .then((userCredential) => {
      const user = userCredential.user;
      window.localStorage.setItem("user", JSON.stringify(user));
      return user
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode.includes("auth/invalid-credential")) {
        window.alert("Email o password non validi");
      }
      console.error("Errore login", errorCode);
    });
  return login;
};

export const changeName = async (newName: string) => {
  const currentUser = auth.currentUser;
  if (currentUser) {
    await updateProfile(auth.currentUser!, {
      displayName: newName,
    }).then(() => {
      alert("Nome aggiornato con successo");
    });
    await reload(currentUser).then(() => {
      console.log("🚀 ~ changeName ~ currentUser:", currentUser);
      window.localStorage.setItem("user", JSON.stringify(currentUser));
    });
  }
};
