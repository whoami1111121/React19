export const Child2 = (props) => {
  console.log("2", props);

  return (
    <div>
      Child2 Child21
      <br />
      <br />
      <h1>{props.name}</h1>
    </div>
  );
};
