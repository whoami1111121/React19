import { useSelector } from "react-redux";
import Child1 from "./Child1";

const TaskBase = () => {
  const selector = useSelector((state) => state.nnnn);
  return (
    <div className="p-8">
      <h1>Task Base js</h1>
      <p>Value: {selector.value}</p>
      <br />
      <Child1 />
    </div>
  );
};

export default TaskBase;
