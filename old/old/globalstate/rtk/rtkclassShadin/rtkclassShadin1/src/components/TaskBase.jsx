import {  useSelector } from "react-redux";
import FirstChild from "./FirstChild";

const TaskBase = () => {
  
  const count = useSelector((state)=>state.counter.value)
  return (
    <div className="p-8">
      <h1>Task Base js :- {count}</h1>
        <br />
        <br />
<FirstChild />
    </div>
  );
};

export default TaskBase;
