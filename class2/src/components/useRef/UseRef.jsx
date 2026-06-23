import { useRef } from "react";
// Uncontrolled component
const UseRef = () => {
  const inputRef = useRef(null);
  const inputUseRefHandle = () => {
    const mainTextgetElementById = document.getElementById("maintext").value;
    const mainTextquerySelector = document.querySelector("#maintext").value;
    inputRef.current.focus();
    inputRef.current.style.color = "red";
    inputRef.current.placeholder = "chnge by placeholder";
    inputRef.current.value = "4232r";
  };
  return (
    <div>
      UseRef
      <br />
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="without ref"
          id="maintext"
        />
        <br />
        <button onClick={inputUseRefHandle}>Click Ref</button>
      </div>
    </div>
  );
};

export default UseRef;
