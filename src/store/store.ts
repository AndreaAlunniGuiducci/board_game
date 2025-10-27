import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice";

export interface StoreType {
  myJWT: {
    data: { jwt: string; username: string };
  };
}

export const store = configureStore({
  reducer: {
    myJWT: userSlice.reducer,
  },
});
