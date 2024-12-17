import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  username: "",
  password: "",
  bio: "",
  dp: "",
  posts: [],
  followers: [],
  following: [],
  saved: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginNewUser(state, action) {
      Object.keys(action.payload).forEach((key) => {
        state[key] = action.payload[key];
      });
    },
    logoutUser(state) {
      Object.keys(initialState).forEach((key) => {
        state[key] = initialState[key];
      });
    },
  },
});

export const { loginNewUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
