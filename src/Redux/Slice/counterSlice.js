import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterHandling",
  initialState: { counter: 0 },
  reducers: {
    plus: (state, action) => {
      state.counter += 1;
    },
    minus: (state, action) => {
      state.counter -= 1;
    },
  },
});
export const { plus, minus } = counterSlice.actions;
export default counterSlice.reducer;
