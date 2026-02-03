import { useState } from "react";
import "./App.css";
import TaskBase from "./components/TaskBase";
export interface User {
  name: string;
  email: string;
}

function App() {
  const user = useState<User>({
    name: "UI",
    email: "ui@gmail.com",
  });
  return (
    <>
      <div className="bg-black text-white w-full min-h-screen text-2xl">
        <TaskBase />
      </div>
    </>
  );
}

export default App;
