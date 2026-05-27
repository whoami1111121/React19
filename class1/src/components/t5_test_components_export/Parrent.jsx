import Child1 from "./Child1";
import ChildernLearn from "./ChildernLearn";

const Parrent = () => {
  return (
    <div>
      parrent parrent
      <br />
      <Child1 name="ram" age={23} id="#2" />
      <br />
      <h1>htis is childern part</h1>
      <ChildernLearn title="learning childern ">
        <br />
        <br />
        <h1>this is childern conten from when it call</h1>
        <br />
        <br />
      </ChildernLearn>
    </div>
  );
};

export default Parrent;
