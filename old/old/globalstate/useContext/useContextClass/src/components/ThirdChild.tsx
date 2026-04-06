import { useContext } from "react";
import { UserContext } from "../context/Context";

const ThirdChild = () => {
  const user = useContext(UserContext);
  return (
    <div>
      ThirdChild ThirdChild
      <div>{user?.name}</div>
    </div>
  );
};

export default ThirdChild;
