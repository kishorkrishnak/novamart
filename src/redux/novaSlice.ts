import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  _id: number;
  name: string;
  email: string;
  photo: string;
}

interface NovaState {
  user: User | null;
}

const initialState: NovaState = {
  user: null,
};

const novaSlice = createSlice({
  name: "nova",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = novaSlice.actions;

export default novaSlice.reducer;
