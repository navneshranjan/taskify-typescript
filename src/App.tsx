import React from "react";
import "./App.css";
import InputField from "./components/input/InputField";
import { Todo } from "./modal";

const App: React.FC = () => {
  const [todo, setTodo] = React.useState<string>("");
  const [todos, setTodos] = React.useState<Todo[]>([]);
  console.log({ todo });
  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log({ todos });

  return (
    <div className="App">
      <span className="heading"> Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
