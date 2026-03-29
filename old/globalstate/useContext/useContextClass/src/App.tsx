import { useState } from "react";
import "./App.css";
import TaskBase from "./components/TaskBase";
import { UserContext } from "./context/Context";
export interface User {
  name: string;
  email: string;
}

function App() {
  const [user] = useState<User>({
    name: "UI",
    email: "ui@gmail.com",
  });
  return (
    <>
      <UserContext.Provider value={user}>
        <div className="bg-black text-white w-full min-h-screen text-2xl">
          <TaskBase />
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
