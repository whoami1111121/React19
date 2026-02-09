import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const incDecNumBy = createSlice({
  name: "addNum",
  initialState,
  reducers: {
    addNumber: (state) => {
      state.value += 1;
    },
    decNumber: (state) => {
      state.value -= 1;
    },
    addBy2: (state) => {
      state.value += 2;
    },
    decBy2: (state) => {
      state.value -= 2;
    },
  },
});

export const { addNumber, decNumber, addBy2, decBy2 } = incDecNumBy.actions;
export default incDecNumBy.reducer;
