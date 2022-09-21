import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "inputSlice",
  initialState: { inputData: "", editData: "" },
  reducers: {
    change: (state, action) => {
      state.inputData = action.payload;
    },
    reset: (state, action) => {
      state.inputData = "";
    },
    editOn: (state, action) => {
      state.editData = action.payload;
    },
  },
});

export const { change, reset, editOn } = inputSlice.actions;
export default inputSlice.reducer;
