import { configureStore } from "@reduxjs/toolkit";
import ValueaddTo from "./slice";
const store = configureStore({
  reducer: {
    nnnn: ValueaddTo,
  },
});
export default store;
