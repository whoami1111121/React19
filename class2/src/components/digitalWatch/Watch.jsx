import { useState } from "react";
import Dropdown from "./Dropdown";
import DigitalWatch from "./DigitalWatch";

const Watch = () => {
  const [color, setColor] = useState("orange");
  console.log(color);

  return (
    <div>
      <Dropdown setColor={setColor} />
      <br /> <br />
      <DigitalWatch color={color} />
    </div>
  );
};

export default Watch;
