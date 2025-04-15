import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Todos from './components/Todos';
import { TODOS } from './data/data';

function App() {
  const [todos, setTodos] = useState(TODOS);
  const [idCounter, setIdCounter] = useState(todos.length + 1); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodoText = e.target.todo.value.trim();

    if (newTodoText === "") return;

    const newTodo = {
      id: idCounter,
      body: newTodoText, 
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setIdCounter((prevId) => prevId + 1); 
    e.target.reset(); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" placeholder="Add a new todo" />
        <button type="submit">Add Todo</button>
      </form>

      <h2>My todos</h2>
      <Todos todos={todos} setTodos={setTodos} />
      <Button />
      <Button greeting="jambo" />
      <Button greeting="konichiwa" />
    </div>
  );
}

export default App;
