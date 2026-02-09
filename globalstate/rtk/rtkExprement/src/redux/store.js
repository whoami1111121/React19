import { configureStore } from "@reduxjs/toolkit";
import addToValueReducer from "./slice";
import nameReducer from "./nameSlice";
const store = configureStore({
  reducer: {
    addNum: addToValueReducer,
    name: nameReducer,
  },
});
export default store;
