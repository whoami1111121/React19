import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/slice/counterSlice";

const FirstChild = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>inc</button>
      <br />
      <br />
      <button onClick={() => dispatch(decrement())}>dec</button>
    </div>
  );
};

export default FirstChild;
