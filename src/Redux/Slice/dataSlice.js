import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: [],
  reducers: {
    insert: (state, action) => {
      if (state.findIndex((value) => value.text === action.payload) === -1) {
        state.push({ text: action.payload, id: action.payload, edit: false });
      } else {
        alert("중복된 데이터는 입력하실 수 없습니다");
      }
    },
    remove: (state, action) => {
      return state.filter((value) => value.id !== action.payload);
    },
    edit: (state, action) => {
      state.forEach((value) => {
        if (value.text === action.payload) {
          value.edit = !value.edit;
        }
      });
    },
    editComplete: (state, action) => {
      state.forEach((value) => {
        if (value.id === action.payload.textValue) {
          if (action.payload.textValue === action.payload.editValue) {
            alert("데이터를 수정해주십시오");
          } else {
            value.text = action.payload.editValue;
            value.id = value.text;
            value.edit = !value.edit;
          }
        }
      });
    },
  },
});

export const { insert, remove, edit, editComplete } = dataSlice.actions;
export default dataSlice.reducer;
