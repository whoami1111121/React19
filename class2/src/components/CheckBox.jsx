import { useState } from "react";

const CheckBox = () => {
  const [value, setValue] = useState([]);

  const changeValue = (event) => {
    event.target.checked
      ? setValue([...value, event.target.value])
      : setValue([...value.filter((item) => item !== event.target.value)]);

    // return console.log(event.target.value);
  };
  return (
    <div>
      <h1>hi</h1>
      <br />
      <div>
        <form action="">
          <label htmlFor="php">
            <input
              type="checkbox"
              value="php"
              id="php"
              onChange={changeValue}
            />{" "}
            php
          </label>
          <br /> <br />
          <label htmlFor="js">
            <input type="checkbox" value="js" id="js" onChange={changeValue} />{" "}
            js
          </label>
          <br /> <br />
          <label htmlFor="laravel">
            <input
              type="checkbox"
              value="laravel"
              id="laravel"
              onChange={changeValue}
            />{" "}
            laravel
          </label>
          <br /> <br />
        </form>
        <br />
        {value.map((item, i) => (
          <span key={i}>
            {item}
            {i + 1 < value.length ? ", " : ""}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CheckBox;
