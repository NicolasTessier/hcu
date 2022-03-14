import { createSlice } from "@reduxjs/toolkit";

export const { reducer, actions } = createSlice({
  name: "heroes",
  initialState: [],
  reducers: {
    change: (state, action) => [...action.payload.heroes],
  },
});
