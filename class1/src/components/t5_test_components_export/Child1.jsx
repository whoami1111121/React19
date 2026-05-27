import { Child2 } from "./Child2";

const Child1 = (props) => {
  return (
    <div>
      Child1 Child1
      <br />
      <br />
      <Child2 {...props} />
    </div>
  );
};

export default Child1;
