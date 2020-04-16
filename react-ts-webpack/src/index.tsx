import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";
export default function App(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  type FormElem = React.FormEvent<HTMLFormElement>;
  interface ITodo {
    text: string;
    complete: boolean;
  }

  const handleSubmit = (event: FormElem): void => {
    event.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const displayTodoItems = todos.map((todo: ITodo, index: number) => (
    <Fragment key={index}>
      <div>
        {todo.text} -{" "}
        <button onClick={() => toggleTodo(index)}>
          {todo.complete ? "Completed" : "Not Completed"}
        </button>
        <button onClick={() => removeTodo(index)}>&times;</button>
      </div>
    </Fragment>
  ));

  const toggleTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const removeTodo = (index: number): void => {
    let newTodos: ITodo[] = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    newTodos[index];
  };

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
        {value}
      </form>
      <section>{displayTodoItems}</section>
    </>
  );
}

const root = document.getElementById("app-root");

ReactDOM.render(<App />, root);
