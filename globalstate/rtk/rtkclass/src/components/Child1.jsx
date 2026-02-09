import React from "react";
import { useDispatch } from "react-redux";
import { addNumber } from "../redux/slice";

const Child1 = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>child</h2>

      <button onClick={() => dispatch(addNumber(1))}>add</button>
    </div>
  );
};

export default Child1;
