import { useContext } from "react"; 
import { MyContext } from "../useContext/store";

const TaskBase = () => {
  const {message} = useContext(MyContext);
  return (
    <div className="p-8">
      <h1>Task Base</h1>
      <br />
      {message}
    </div>
  );
};

export default TaskBase;
