import { useState } from "react";

const UseState_Todo = () => {
  const [add, setAdd] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, task: "task 1", done: false },
    { id: 2, task: "task 2", done: false },
    { id: 3, task: "task 3", done: false },
  ]);

  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      task: add,
      done: false,
    };
    setTodos([...todos, newTodo]);
    setAdd("");
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const updateDone = (id) => {
    setTodos(
      todos.map((todo)=> {
        if(todo.id === id){
          return {...todo, done: !todo.done}
        }
        return todo
      })
    )
  }

  return (
    <div>
      <h1>todo list</h1>

      <div>
        <input
          type="text"
          value={add}
          onChange={(e) => setAdd(e.target.value)}
        />
      </div>
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span>
                {todo.task}{" "} {todo.done ? "finish" : "not finsi"}
                <button onClick={() => updateDone(todo.id)}>done</button>{" "}
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UseState_Todo;
