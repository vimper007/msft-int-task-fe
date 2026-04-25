import { createSlice } from "@reduxjs/toolkit";

interface Auth {
  id: string | null;
  name: string | null;
  email: string | null;
  createdAt: string | null;
  token: string | null;
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    id: null,
    name: null,
    email: null,
    createdAt: null,
    token: null,
  } as Auth,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.createdAt = action.payload.createdAt;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.id = null;
      state.name = null;
      state.email = null;
      state.createdAt = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
