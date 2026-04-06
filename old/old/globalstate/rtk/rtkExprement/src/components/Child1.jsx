import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNumber, decNumber, addBy2, decBy2 } from "../redux/slice";
import { setName } from "../redux/nameSlice";
const Child1 = () => {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState(""); 
  return (
    <div>
      <h2>child</h2>

      <button onClick={() => dispatch(addNumber())}>add</button>
      <br />
      <button onClick={() => dispatch(decNumber())}>dec</button>
      <br />
      <button onClick={() => dispatch(addBy2())}>add2</button>
      <br />
      <button onClick={() => dispatch(decBy2())}>decBy2</button>
      <br />

      <br />
      <br />

      <br />
      <br />
      <input
        type="text"
        placeholder="Set name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={() => dispatch(setName(newName))}>Set Name</button>
    </div>
  );
};

export default Child1;
