import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: { uid: "", username: "" },
  },
  reducers: {
    setUser: (state, action) => {
      state.data.uid = action.payload.uid;
      state.data.username = action.payload.username;
    },
  },
});

export const { setUser } = userSlice.actions;
