import {   createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

// const addToValue = (state, action) => {
//   state.value += action.payload;
// }

const addToValue = createSlice({
  name: "addNum",
  initialState,
  reducers: {
    addNumber: (state) => {
      state.value += 1;
    },
  },
});

export const { addNumber } = addToValue.actions;
export default addToValue.reducer;
