// import Parrent from "./components/t5_test_components_export/parrent";

import Text from "./components/PassFunctioninComponentasProps/Text";

const App = () => {
  const userClick = (user) => {
    console.log(user, "click user");

    alert(`user afd ${user}`);
  };
  return (
    <div>
      {/* <CheckBox /> */}
      {/* <Watch /> */}
      {/* <UseRef /> */}

      <Text userClick={userClick} user="Sakin" />
      <Text userClick={userClick} user="Sabin" />
    </div>
  );
};

export default App;
