import { useContext } from "react"; 
import { MyContext } from "../useContext/store";

const TaskBase = () => {
  const mess = useContext(MyContext);
  return (
    <div className="p-8">
      <h1>Task Base</h1>
      <br />
      {mess}
    </div>
  );
};

export default TaskBase;
