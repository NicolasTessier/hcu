import { createSlice } from "@reduxjs/toolkit";

export const { reducer, actions } = createSlice({
  name: "favourites",
  initialState: [],
  reducers: {
    toggle: (state, action) => {
      return state.find((favourite) => favourite.id === action.payload.hero.id)
        ? state.filter((hero) => hero.id !== action.payload.hero.id)
        : [...state, action.payload.hero];
    },
  },
});
