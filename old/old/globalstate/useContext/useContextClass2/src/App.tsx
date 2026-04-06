import "./App.css";
import TaskBase from "./components/TaskBase";
import { MyContext } from "./useContext/store";

function App() {
  const message = "this is my message";
  const warning = "are you going close it";
  return (
    <>
      <MyContext.Provider value={{ message, warning }}>
        <div className="bg-black text-white w-full min-h-screen text-2xl">
          <TaskBase />
        </div>
      </MyContext.Provider>
    </>
  );
}

export default App;
