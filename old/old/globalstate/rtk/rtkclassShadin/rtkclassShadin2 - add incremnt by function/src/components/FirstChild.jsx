import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { decrement, increment, incrementBy } from "../redux/slice/counterSlice";

const FirstChild = () => {
  const dispatch = useDispatch();
  const [incAmt, setIncAmt] = useState(1);
  return (
    <div>
      <button onClick={() => dispatch(increment())}>inc</button>
      <br />
      <br />
      <button onClick={() => dispatch(decrement())}>dec</button>

      <br />
      <br />
      <button onClick={() => dispatch(incrementBy(Number(incAmt)))}>
        ince by
      </button>

      <br />
      <br />
      <h1>inc Amt is :- {incAmt}</h1>

      <br />
      <br />
      <input
        type="number"
        value={incAmt}
        onChange={(e) => setIncAmt(Number(e.target.value))}
      />
      <br />
      <br />

      <button onClick={() => setIncAmt(incAmt + 1)}>ince inc Amt</button>
      <br />
      <br />
      <button onClick={() => setIncAmt(incAmt - 1)}>dec inc Amt</button>
    </div>
  );
};

export default FirstChild;
