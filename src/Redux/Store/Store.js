import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Slice/counterSlice";
import dataSlice from "../Slice/dataSlice";
import inputSlice from "../Slice/inputSlice";

const store = configureStore({
  reducer: { counter: counterSlice, input: inputSlice, data: dataSlice },
});

export default store;
